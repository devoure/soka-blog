from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
        path('posts/', views.get_posts, name="get-all-posts"),
        path('posts/<str:pk>/', views.get_post, name="get-post"),
        path('comments/', views.get_comments, name="get-all-comments"),
        path('comments/<str:pk>/', views.get_comment, name="get-comment"),
        path('comments/add', views.add_comment, name="add-comment")


        # path('posts/update/<str:pk>/', views.update_post, name="update-post"),
        # path('posts/delete/<str:pk>/', views.delete_post, name="delete-post"),
        # path('posts/add/', views.add_post, name="add_post")
        ]
