## Global dependencies

1. use pynev
2. install `uv` globally in pyenv

```bash
pip install uv
```
3. install dependencies

```bash
# in activated venv
source .venv/bin/activate

# install
uv sync

# run
uvicorn app.main:app --reload

```

If renamed folder `githubcities` to `full-stack-fastapi-template-nextjs` must delete and recreate venv, it has outdated absolute path to venv.

```bash
cd backend
rm -rf .venv
uv venv
```
