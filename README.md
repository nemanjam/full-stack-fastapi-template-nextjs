# Githubcities

## Local setup dev

```bash
# Navigate to project root
cd ~/Desktop/githubcities

# Run just Postgres database service
docker compose up -d db

# Navigate to backend folder
cd ./backend

# Create a virtual environment
uv venv

# Activate the environment
source .venv/bin/activate

# Sync and install dependencies
uv sync

# If changed models generate migration
$ alembic revision --autogenerate -m "e.g. Add column last_name to User model"

# Await db, run migrations and seed
cd backend/
bash scripts/prestart.sh

# Run just database migrations
alembic upgrade head

# Start the FastAPI development server
uvicorn app.main:app --reload

# Run pre-commit manually
uv run pre-commit run --all-files

# Lint and format
# Must run from /backend folder
cd backend/
bash scripts/lint.sh
bash scripts/format.sh
```

## Development URLs

```bash
# Frontend (todo)
http://localhost:5173

# Backend (root 404 route)
http://localhost:8000

# Automatic Interactive Docs (Swagger UI)
http://localhost:8000/docs

# Automatic Alternative Docs (ReDoc)
http://localhost:8000/redoc

# Adminer
http://localhost:8080

# Traefik UI
http://localhost:8090

# MailCatcher
http://localhost:1080
```

## Docker setup dev

```bash
# Create a virtual environment
uv venv

# Activate the environment
source .venv/bin/activate

# Build the containers
docker compose build

# Start the database container (replace dbcontainername with your DB service name)
docker compose up -d dbcontainername

# Run Alembic migrations (replace containername with your app container name)
docker compose run containername --rm alembic head

# Start all services
docker compose up

# In Docker backend available on 8080, not 8000
http://localhost:8080/docs
```
