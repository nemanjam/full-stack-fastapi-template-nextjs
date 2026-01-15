from sqlmodel import Session, text

LOCK_ID = 987654321  # any stable integer

def acquire_lock(session: Session) -> bool:
    return session.exec(
        text("SELECT pg_try_advisory_lock(:id)"),
        {"id": LOCK_ID},
    ).one()[0]

def release_lock(session: Session) -> None:
    session.exec(
        text("SELECT pg_advisory_unlock(:id)"),
        {"id": LOCK_ID},
    )
