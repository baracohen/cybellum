# app/run.py
from fastapi import FastAPI
from app.utils.database import init_db
from app.routes import auth, blog_post, comment
from app.config import DevelopmentConfig, ProductionConfig

app = FastAPI()

# Use the appropriate config based on the environment
app_config = DevelopmentConfig if app.debug else ProductionConfig
app.config.from_object(app_config)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(blog_post.router, prefix="/blog", tags=["blog"])
app.include_router(comment.router, prefix="/comment", tags=["comment"])

init_db()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)
