from fastapi import Request, HTTPException
from .clerk import verify_clerk_token

def get_current_user(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")
    token = auth_header.split(" ")[1]
    try:
        return verify_clerk_token(token)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
