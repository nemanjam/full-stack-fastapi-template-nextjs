# Required by vercel.json to locate the FastAPI `app` instance.
# `# noqa: F401` prevents formatters from removing this import.

from app.main import app  # noqa: F401
