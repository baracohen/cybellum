# app/__init__.py

# Import the necessary modules, routes, and models to make them available
from .routes import auth, blog_post, comment
from .models import user, blog_post, comment
from .utils import database, auth

# You may include any initialization code if needed
# For example, initializing a database connection
database.init_db()
