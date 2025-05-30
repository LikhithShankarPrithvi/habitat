from models import RoomModel
from database import rooms_collection  # Ensure you have the correct database collection
from pymongo import ReturnDocument

async def create_room(room: RoomModel) -> RoomModel:
    room_dict = room.dict()  # Convert the RoomModel to a dictionary
    result = await rooms_collection.insert_one(room_dict)  # Insert the room into the database
    room.id = str(result.inserted_id)  # Set the id of the room to the inserted id
    return room  # Return the created room

async def get_room_by_id(room_id: str) -> RoomModel:
    room_data = await rooms_collection.find_one({"_id": room_id})  # Fetch the room by ID
    if room_data:
        room_data["_id"] = str(room_data["_id"])  # Convert ObjectId to string
        return RoomModel(**room_data)  # Return the RoomModel instance
    return None  # Return None if the room is not found

async def join_room(room_id: str, user_id: str) -> RoomModel:
    # Update the room to add the user_id to the list of users
    result = await rooms_collection.find_one_and_update(
        {"_id": room_id},
        {"$addToSet": {"users": user_id}},  # Use $addToSet to avoid duplicates
        return_document=ReturnDocument.AFTER
    )
    
    if result:
        result["_id"] = str(result["_id"])  # Convert ObjectId to string
        return RoomModel(**result)  # Return the updated RoomModel instance
    return None  # Return None if the room is not found

