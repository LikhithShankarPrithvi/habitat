from fastapi import APIRouter, HTTPException, Depends
from models import RoomModel
from services.room_services import create_room, get_room_by_id, join_room  # Ensure you have this service function
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")  # Assuming you have a token-based auth

@router.post("/rooms/create", response_model=RoomModel)
async def create_new_room(room: RoomModel):
    try:
        new_room = await create_room(room)  # Call the service to create a new room
        return new_room
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/rooms/{room_id}", response_model=RoomModel)
async def get_room(room_id: str):
    room = await get_room_by_id(room_id)  # Call the service to get the room by ID
    if room is None:
        raise HTTPException(status_code=404, detail="Room not found")
    return room

@router.post("/rooms/{room_id}/join")
async def join_room_endpoint(room_id: str, token: str = Depends(oauth2_scheme)):
    user_id = decode_token(token)  # Implement this function to decode the token and get user_id
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    
    room = await join_room(room_id, user_id)  # Call the service to join the room
    if not room:
        raise HTTPException(status_code=404, detail="Room not found or user already in room")
    
    return {"detail": "Successfully joined the room", "room": room}


