# app/core/db_lock.py
from sqlmodel import Session, text

LOCK_ID = 987654321  # any stable integer

def acquire_lock(session: Session) -> bool:
    stmt = text(f"SELECT pg_try_advisory_lock({LOCK_ID})")
    return session.exec(stmt).one()[0]

def release_lock(session: Session) -> None:
    stmt = text(f"SELECT pg_advisory_unlock({LOCK_ID})")
    session.exec(stmt)
