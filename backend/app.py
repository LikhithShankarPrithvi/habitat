from typing import List
from fastapi import FastAPI, HTTPException
from schemas import UserCreate, UserResponse
from services.user_services import create_user,get_user_by_id, get_all_users
from routers.user_routes import router as user_router
from routers.room_routes import router as room_router

app = FastAPI()

app.include_router(user_router)
app.include_router(room_router)