from ..models.user import User
from fastapi import APIRouter, Depends, status, HTTPException
from app.utils.auth import get_current_user, create_user, authenticate_user

router = APIRouter()

@router.post("/register")
def register(username: str, email: str, password: str):
    return create_user(username, email, password)

@router.post("/login")
def login(username: str, password: str, token: str = Depends(authenticate_user)):
    return {"token": token, "token_type": "bearer"}

@router.get("/user", response_model=User, response_model_exclude_none=True)
def get_user(current_user: User = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return current_user