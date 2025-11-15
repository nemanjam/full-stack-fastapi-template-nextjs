from sqlmodel import Session, create_engine, select

from app import crud
from app.core.config import settings
from app.models import ItemCreate, User, UserCreate

engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))


# make sure all SQLModel models are imported (app.models) before initializing DB
# otherwise, SQLModel might fail to initialize relationships properly
# for more details: https://github.com/fastapi/full-stack-fastapi-template/issues/28


def init_db(session: Session) -> None:
    # Tables should be created with Alembic migrations
    # But if you don't want to use migrations, create
    # the tables un-commenting the next lines
    # from sqlmodel import SQLModel

    # This works because the models are already imported and registered from app.models
    # SQLModel.metadata.create_all(engine)

    superuser: User | None = None

    # Create 10 users: superuser at i=0, regular users at i=1..9
    for i in range(0, 10):
        if i == 0:
            email = settings.FIRST_SUPERUSER
            password = settings.FIRST_SUPERUSER_PASSWORD
            is_super = True
        else:
            email = f"user{i}@example.com"
            password = settings.FIRST_SUPERUSER_PASSWORD
            is_super = False

        # Skip if user exists
        existing = session.exec(select(User).where(User.email == email)).first()
        if existing:
            if i == 0:
                superuser = existing
            continue

        user_in = UserCreate(
            email=email,
            password=password,
            is_superuser=is_super,
        )
        created = crud.create_user(session=session, user_create=user_in)

        if i == 0:
            superuser = created

    # Create 10 items for the superuser
    if superuser:
        for i in range(1, 11):
            item_in = ItemCreate(
                title=f"Item {i}",
                description=f"Seeded item number {i}",
            )
            crud.create_item(session=session, item_in=item_in, owner_id=superuser.id)

    session.commit()
