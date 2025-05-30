from database import users_collection
from models import UserModel
from schemas import UserCreate, UserListResponse, UserResponse
from bson import ObjectId

async def create_user(user: UserCreate):
    existing = await users_collection.find_one({"email": user.email})
    if existing:
        return None
    user_dict = user.dict()
    result = await users_collection.insert_one(user_dict)
    created_user = await users_collection.find_one({"_id": result.inserted_id})

    # Convert _id to str
    created_user["_id"] = str(created_user["_id"])

    return UserModel(**created_user)

async def upsert_user_from_clerk(clerk_user: dict):
    clerk_id = clerk_user["sub"]
    email = clerk_user.get("email_addresses", [{}])[0].get("email_address", "")
    full_name = f"{clerk_user.get('first_name', '')} {clerk_user.get('last_name', '')}".strip()

    result = await users_collection.update_one(
        {"clerk_id": clerk_id},
        {"$set": {"email": email, "full_name": full_name}},
        upsert=True
    )
    user = await users_collection.find_one({"clerk_id": clerk_id})
    user["_id"] = str(user["_id"])
    return UserModel(**user)

async def get_user_by_id(user_id: str):
    if not ObjectId.is_valid(user_id):
        return None
    user = await users_collection.find_one({"_id": ObjectId(user_id)})
    if user:
        user["_id"] = str(user["_id"])
        return UserModel(**user)
    return None


async def get_all_users():
    users = []
    cursor = users_collection.find({})
    async for user in cursor:
        user["_id"] = str(user["_id"])
        users.append(UserModel(**user))
    return users

