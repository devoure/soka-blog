from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
        path('posts/', views.get_posts, name="get-all-posts"),
        path('posts/<str:pk>/', views.get_post, name="get-post"),
        # path('posts/update/<str:pk>/', views.update_post, name="update-post"),
        # path('posts/delete/<str:pk>/', views.delete_post, name="delete-post"),
        # path('posts/add/', views.add_post, name="add_post")
        ]
