from pydantic import BaseModel, EmailStr
from typing import Optional, List

# User input for creating
class UserCreate(BaseModel):
    username: str
    email: EmailStr

# User response (output)
class UserResponse(BaseModel):
    id: str
    username: str
    email: EmailStr

# Base model for the output of get_all_users
class UserListResponse(BaseModel):
    users: List[UserResponse]  # List of UserResponse models

# Similarly, you can add RoomCreate, RoomResponse, TaskCreate, etc.
