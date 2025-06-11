# Githubcities

## Local development setup

```bash
# Navigate to project root
cd ~/Desktop/githubcities

# Run Postgres database
docker compose up -d

# Navigate to backend folder
cd ./backend

# Create a virtual environment
uv venv

# Activate the environment
source .venv/bin/activate

# Sync and install dependencies
uv sync

# Run database migrations
alembic upgrade head

# Start the FastAPI development server
uvicorn app.main:app --reload
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

## Docker setup

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
```