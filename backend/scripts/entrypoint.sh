#!/usr/bin/env bash
set -e

# Run migrations and seed
/app/scripts/prestart.sh

# Start FastAPI server
# 8000 uvicorn default port
exec fastapi run --workers 4 app/main.py
