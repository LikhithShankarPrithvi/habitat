from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List, Literal
from datetime import datetime, date, time

class UserModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    username: str
    email: EmailStr
    password: str


class RoomModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    users: List[str] = []  # list of Clerk user_ids
    status: Literal["waiting", "active", "completed"] = "waiting"
    cycle_length: int  # in days
    cycle_reward: int  # e.g., XP or points
    daily_start_time: datetime  # UTC start time of day
    task_creation_deadline: int  # in hours from start_time
    daily_penalty: int  # penalty for missing tasks
    created_at: datetime = Field(default_factory=datetime.utcnow)


class TaskModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    title: str
    description: Optional[str] = None
    completed: bool = False
    user_id: Optional[str] = None  # user id assigned to the task
    room_id: Optional[str] = None  # room id where the task is located
    date_created: datetime

class XPLogModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    user_id: str
    xp_amount: int
    reason: str
