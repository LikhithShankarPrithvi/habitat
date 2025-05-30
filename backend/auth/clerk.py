from jose import jwt
import requests

CLERK_ISSUER = "https://api.clerk.dev"  # or your Clerk instance URL
JWKS_URL = f"{CLERK_ISSUER}/v1/jwks"
jwks = requests.get(JWKS_URL).json()

def verify_clerk_token(token: str):
    header = jwt.get_unverified_header(token)
    key = next(k for k in jwks["keys"] if k["kid"] == header["kid"])
    return jwt.decode(token, key, algorithms=["RS256"], issuer=CLERK_ISSUER)



