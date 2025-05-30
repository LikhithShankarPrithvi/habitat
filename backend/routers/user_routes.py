# routes/user_routes.py

from typing import List
from fastapi import APIRouter, HTTPException, Depends
from schemas import UserCreate, UserResponse
from services.user_services import create_user, get_user_by_id, get_all_users,upsert_user_from_clerk 
from auth.dependencies import get_current_user
from typing import List

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/", response_model=UserResponse)
async def register_user(user: UserCreate):
    created_user = await create_user(user)
    if not created_user:
        raise HTTPException(status_code=400, detail="User with this email already exists")
    return created_user

@router.get("/me", response_model=UserResponse)
async def get_or_create_user(current_user=Depends(get_current_user)):
    user = await upsert_user_from_clerk(current_user)
    return user

@router.get("/", response_model=List[UserResponse])
async def list_users():
    return await get_all_users()
