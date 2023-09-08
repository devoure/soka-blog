from django.contrib import admin
from .models import Post, Comment


# Register your models here.
@admin.register(Post)
class PostsAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'status')
    list_filter = ('status', 'author')
    search_fields = ('title',)
    prepopulated_fields = {'slug': ('title', )}
    raw_id_fields = ('author',)
    date_hierarchy = 'published'
    ordering = ('status', 'published')


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'post')
    list_filter = ('created',)
    search_fields = ('name', 'email')
