from rest_framework import serializers
from .models import Post, Comment
from taggit.serializers import (TagListSerializerField, TaggitSerializer)


class PostSerializers(TaggitSerializer, serializers.ModelSerializer): 
    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = '__all__'


class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
