#!/usr/bin/env python3
import subprocess
import sys
from pathlib import Path

# Note: python variant needed for Vercel as build command to migrate and seed db

BASE_DIR = Path(__file__).parent.parent
print(f"Working directory: {BASE_DIR}")

# Optional: list files for debug
for p in BASE_DIR.rglob("*"):
    print(p.relative_to(BASE_DIR))

# Step 1: Wait for DB
subprocess.run([sys.executable, "app/backend_pre_start.py"], check=True)

# Step 2: Run migrations
subprocess.run(["alembic", "upgrade", "head"], check=True)

# Step 3: Seed initial data
subprocess.run([sys.executable, "app/initial_data.py"], check=True)
