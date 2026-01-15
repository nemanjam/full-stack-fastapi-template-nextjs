import logging
from contextlib import asynccontextmanager

import sentry_sdk
from fastapi import FastAPI
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from sqlmodel import Session, text

from app.core.db import engine
from app.api.main import api_router
from app.core.config import settings
from app.utils import is_prod, log_settings


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"


if settings.SENTRY_DSN and settings.ENVIRONMENT != "local":
    sentry_sdk.init(dsn=str(settings.SENTRY_DSN), enable_tracing=True)


@asynccontextmanager
async def lifespan(_app: FastAPI):
    if is_prod:
        from alembic.config import Config
        from alembic import command
        from app.core.db import init_db, engine
        from app.core.db_lock import acquire_lock, release_lock

        logger.info("Attempting startup DB lock...")

        with Session(engine) as session:
            if not acquire_lock(session):
                logger.info("Another instance is running migrations, skipping.")
                yield
                return

            try:
                logger.info("Acquired startup lock. Running migrations...")
                alembic_cfg = Config("alembic.ini")
                command.upgrade(alembic_cfg, "head")

                logger.info("Seeding database...")
                init_db(session)

                logger.info("Startup DB init completed.")
            finally:
                release_lock(session)
                logger.info("Released startup DB lock.")


    # Yield control to let FastAPI run
    yield

    # onAppShutDown
    print("Application is shutting down.")


app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    generate_unique_id_function=custom_generate_unique_id,
    lifespan=lifespan,
)


# Set all CORS enabled origins
if settings.all_cors_origins:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.all_cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# For Github login Request object
app.add_middleware(SessionMiddleware, secret_key=settings.SESSION_SECRET_KEY)

app.include_router(api_router, prefix=settings.API_V1_STR)

log_settings(settings)
