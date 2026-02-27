```bash

# backend
2026-02-27 18:14:01.064 [error] Error importing app/api/index.py:
Traceback (most recent call last):
File "/var/task/_vendor/vercel_runtime/vc_init.py", line 530, in <module>
__vc_spec.loader.exec_module(__vc_module)
File "<frozen importlib._bootstrap_external>", line 999, in exec_module
File "<frozen importlib._bootstrap>", line 488, in _call_with_frames_removed
File "/var/task/app/api/index.py", line 4, in <module>
from app.main import app  # noqa: F401
^^^^^^^^^^^^^^^^^^^^^^^^
File "/var/task/app/main.py", line 7, in <module>
from app.api.main import api_router
File "/var/task/app/api/main.py", line 3, in <module>
from app.api.routes import items, login, private, users, utils
File "/var/task/app/api/routes/items.py", line 7, in <module>
from app.api.deps import CurrentUser, SessionDep
File "/var/task/app/api/deps.py", line 11, in <module>
from app.core import security
File "/var/task/app/core/security.py", line 8, in <module>
from app.core.config import settings
File "/var/task/app/core/config.py", line 169, in <module>
settings = Settings()  # type: ignore
^^^^^^^^^^
File "/var/task/_vendor/pydantic_settings/main.py", line 152, in __init__
super().__init__(
File "/var/task/_vendor/pydantic/main.py", line 212, in __init__
validated_self = self.__pydantic_validator__.validate_python(data, self_instance=self)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
pydantic_core._pydantic_core.ValidationError: 1 validation error for Settings
FIRST_SUPERUSER
Field required [type=missing, input_value={'VERCEL_ENV': 'production'}, input_type=dict]
For further information visit https://errors.pydantic.dev/2.9/v/missing
Python process exited with exit status: 1. The logs above can help with debugging the issue.
Error importing app/api/index.py:
Traceback (most recent call last):
File "/var/task/_vendor/vercel_runtime/vc_init.py", line 530, in <module>
__vc_spec.loader.exec_module(__vc_module)
File "<frozen importlib._bootstrap_external>", line 999, in exec_module
File "<frozen importlib._bootstrap>", line 488, in _call_with_frames_removed
File "/var/task/app/api/index.py", line 4, in <module>
from app.main import app  # noqa: F401
^^^^^^^^^^^^^^^^^^^^^^^^
File "/var/task/app/main.py", line 7, in <module>
from app.api.main import api_router
File "/var/task/app/api/main.py", line 3, in <module>
from app.api.routes import items, login, private, users, utils
File "/var/task/app/api/routes/items.py", line 7, in <module>
from app.api.deps import CurrentUser, SessionDep
File "/var/task/app/api/deps.py", line 11, in <module>
from app.core import security
File "/var/task/app/core/security.py", line 8, in <module>
from app.core.config import settings
File "/var/task/app/core/config.py", line 169, in <module>
settings = Settings()  # type: ignore
^^^^^^^^^^
File "/var/task/_vendor/pydantic_settings/main.py", line 152, in __init__
super().__init__(
File "/var/task/_vendor/pydantic/main.py", line 212, in __init__
validated_self = self.__pydantic_validator__.validate_python(data, self_instance=self)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
pydantic_core._pydantic_core.ValidationError: 1 validation error for Settings
FIRST_SUPERUSER
Field required [type=missing, input_value={'VERCEL_ENV': 'production'}, input_type=dict]
For further information visit https://errors.pydantic.dev/2.9/v/missing
Python process exited with exit status: 1. The logs above can help with debugging the issue.

# frontend
Error: An error occurred while loading instrumentation hook: ❌ Invalid environment variables found:
- Invalid variable [API_URL]: Invalid input: expected string, received undefined
    at <unknown> (.next/server/chunks/frontend_52ca3c1d._.js:58:172207)
    at module evaluation (.next/server/chunks/frontend_52ca3c1d._.js:60:23)
    at instantiateModule (.next/server/chunks/[turbopack]_runtime.js:740:9)
    at getOrInstantiateModuleFromParent (.next/server/chunks/[turbopack]_runtime.js:763:12)
    at Context.esmImport [as i] (.next/server/chunks/[turbopack]_runtime.js:228:20)
    at <unknown> (.next/server/chunks/frontend_apps_web_src_082e6dcb._.js:1:528)
    at async Module.s [as register] (.next/server/chunks/frontend_apps_web_src_082e6dcb._.js:1:177)

```