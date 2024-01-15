# app/routes/comment.py
from ..models.user import User
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.comment import Comment
from app.utils.database import SessionLocal
from app.utils.auth import get_current_user
from app.models.blog_post import BlogPost

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/add", response_model=Comment)
def add_comment_to_post(post_id: int, content: str, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    blog_post = db.query(BlogPost).filter(BlogPost.id == post_id).first()
    if blog_post is None:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    new_comment = Comment(content=content, author_id=current_user.id, post_id=post_id)
    db.add(new_comment)
    db.commit()
    db.refresh(new_comment)
    return new_comment

@router.get("/all/{blog_post_id}", response_model=list[Comment])
def get_comments_for_post(blog_post_id: int, db: Session = Depends(get_db)):
    blog_post = db.query(BlogPost).filter(BlogPost.id == blog_post_id).first()
    if blog_post is None:
        raise HTTPException(status_code=404, detail="Blog post not found")

    comments = db.query(Comment).filter(Comment.post_id == blog_post_id).all()
    return comments
