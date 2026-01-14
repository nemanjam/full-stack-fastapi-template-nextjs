import secrets
import warnings
from typing import Annotated, Any, Literal

from pydantic import (
    AnyUrl,
    BeforeValidator,
    EmailStr,
    HttpUrl,
    PostgresDsn,
    computed_field,
    model_validator,
)
from pydantic_core import MultiHostUrl
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing_extensions import Self


def parse_cors(v: Any) -> list[str] | str:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list | str):
        return v
    raise ValueError(v)


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        # Use top level .env file (one level above ./backend/)
        env_file="../.env",
        env_ignore_empty=True,
        extra="ignore",
    )

    # Vercel default vars
    VERCEL_ENV: str | None = None

    API_V1_STR: str = "/api/v1"
    AUTH_COOKIE: str = "auth_cookie"
    # default value if no env
    JWT_SECRET_KEY: str = secrets.token_urlsafe(32)
    SESSION_SECRET_KEY: str = secrets.token_urlsafe(32)
    # Cookie expiration and JWT expiration match
    # 24 hours * 7 days = 168 hours
    ACCESS_TOKEN_EXPIRE_HOURS: int = 24 * 7
    SITE_URL: str = "changethis"
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"

    # my
    GITHUB_CLIENT_ID: str = "changethis"
    GITHUB_CLIENT_SECRET: str = "changethis"

    BACKEND_CORS_ORIGINS: Annotated[
        list[AnyUrl] | str, BeforeValidator(parse_cors)
    ] = []

    @computed_field  # type: ignore[prop-decorator]
    @property
    def all_cors_origins(self) -> list[str]:
        return [str(origin).rstrip("/") for origin in self.BACKEND_CORS_ORIGINS] + [
            self.SITE_URL
        ]

    PROJECT_NAME: str = "Full stack FastAPI template Next.js"
    SENTRY_DSN: HttpUrl | None = None

    # for Vercel and Neon
    DATABASE_URL: PostgresDsn | None = None

    # Local / Docker fallback
    POSTGRES_SERVER: str | None = None
    POSTGRES_PORT: int = 5432
    POSTGRES_USER: str | None = None
    POSTGRES_PASSWORD: str | None = None
    POSTGRES_DB: str | None = None

    @computed_field  # type: ignore[prop-decorator]
    @property
    def SQLALCHEMY_DATABASE_URI(self) -> PostgresDsn:
        # Vercel + Neon
        if self.DATABASE_URL:
            database_url = str(self.DATABASE_URL)
            # Force SQLAlchemy to use psycopg v3 on Vercel (Neon provides postgresql:// by default)
            if database_url.startswith("postgresql://"):
                database_url = database_url.replace(
                    "postgresql://", "postgresql+psycopg://"
                )
            return database_url

        # Local / Docker
        if not all(
            [
                self.POSTGRES_SERVER,
                self.POSTGRES_USER,
                self.POSTGRES_PASSWORD,
                self.POSTGRES_DB,
            ]
        ):
            raise ValueError(
                "Either DATABASE_URL (Vercel/Neon) or POSTGRES_* variables must be set"
            )

        return MultiHostUrl.build(
            scheme="postgresql+psycopg",
            username=self.POSTGRES_USER,
            password=self.POSTGRES_PASSWORD,
            host=self.POSTGRES_SERVER,
            port=self.POSTGRES_PORT,
            path=self.POSTGRES_DB,
        )

    SMTP_TLS: bool = True
    SMTP_SSL: bool = False
    SMTP_PORT: int = 587
    SMTP_HOST: str | None = None
    SMTP_USER: str | None = None
    SMTP_PASSWORD: str | None = None
    EMAILS_FROM_EMAIL: EmailStr | None = None
    EMAILS_FROM_NAME: EmailStr | None = None

    @model_validator(mode="after")
    def _set_default_emails_from(self) -> Self:
        if not self.EMAILS_FROM_NAME:
            self.EMAILS_FROM_NAME = self.PROJECT_NAME
        return self

    EMAIL_RESET_TOKEN_EXPIRE_HOURS: int = 48

    @computed_field  # type: ignore[prop-decorator]
    @property
    def emails_enabled(self) -> bool:
        return bool(self.SMTP_HOST and self.EMAILS_FROM_EMAIL)

    EMAIL_TEST_USER: EmailStr = "test@example.com"
    FIRST_SUPERUSER: EmailStr
    FIRST_SUPERUSER_PASSWORD: str

    def _check_default_secret(self, var_name: str, value: str | None) -> None:
        if value == "changethis":
            message = (
                f'The value of {var_name} is "changethis", '
                "for security, please change it, at least for deployments."
            )
            if self.ENVIRONMENT == "local":
                warnings.warn(message, stacklevel=1)
            else:
                raise ValueError(message)

    @model_validator(mode="after")
    def resolve_environment(self) -> Self:
        if self.VERCEL_ENV == "production":
            self.ENVIRONMENT = "production"
        elif self.VERCEL_ENV == "preview":
            self.ENVIRONMENT = "staging"
        # else: keep whatever ENVIRONMENT was set from OS/.env
        return self

    # Must run at end
    @model_validator(mode="after")
    def _enforce_non_default_secrets(self) -> Self:
        self._check_default_secret("JWT_SECRET_KEY", self.JWT_SECRET_KEY)
        self._check_default_secret("SESSION_SECRET_KEY", self.SESSION_SECRET_KEY)
        # self._check_default_secret("POSTGRES_PASSWORD", self.POSTGRES_PASSWORD)
        self._check_default_secret(
            "FIRST_SUPERUSER_PASSWORD", self.FIRST_SUPERUSER_PASSWORD
        )

        return self


settings = Settings()  # type: ignore
