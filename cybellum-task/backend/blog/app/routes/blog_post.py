from ..models.user import User
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.blog_post import BlogPost
from app.utils.database import SessionLocal, init_db
from app.utils.auth import get_current_user

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/create", response_model=BlogPost)
def create_blog_post(title: str, content: str, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    new_blog_post = BlogPost(title=title, content=content, author_id=current_user.id)
    db.add(new_blog_post)
    db.commit()
    db.refresh(new_blog_post)
    return new_blog_post

@router.get("/all", response_model=list[BlogPost])
def get_all_blog_posts(db: Session = Depends(get_db)):
    blog_posts = db.query(BlogPost).all()
    return blog_posts

@router.get("/{blog_post_id}", response_model=BlogPost)
def get_blog_post(blog_post_id: int, db: Session = Depends(get_db)):
    blog_post = db.query(BlogPost).filter(BlogPost.id == blog_post_id).first()
    if blog_post is None:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return blog_post
