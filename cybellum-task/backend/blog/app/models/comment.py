# app/models/comment.py
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.utils.base import Base 

class Comment(Base):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True)
    content = Column(String, nullable=False)
    author_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    post_id = Column(Integer, ForeignKey('blog_posts.id'), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    author = relationship('User', back_populates='comments')
    blog_post = relationship('BlogPost', back_populates='comments')
