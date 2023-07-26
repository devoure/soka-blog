from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.
class Post(models.Model):
    POST_STATUS = (
            ('draft', 'Draft'),
            ('published', 'Published')
            )
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, unique_for_date='published')
    author = models.ForeignKey(User,  on_delete=models.CASCADE,
                               related_name='blog_posts')
    body = models.TextField()
    published = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=POST_STATUS,
                              default='draft')

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
