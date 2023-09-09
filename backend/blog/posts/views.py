from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializers, CommentSerializers
from .models import Post, Comment
from taggit.models import Tag
from django.shortcuts import get_object_or_404
from django.db.models import Count


# Create your views here.
@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()
    serialized_posts = PostSerializers(posts, many=True)
    return Response(serialized_posts.data)


@api_view(['GET'])
def get_post(request, pk):
    post = Post.objects.get(id=pk)
    serialized_post = PostSerializers(post, many=False)
    return Response(serialized_post .data)


@api_view(['GET'])
def get_comments(request):
    comments = Comment.objects.all()
    serialized_comments = CommentSerializers(comments, many=True)
    return Response(serialized_comments.data)


@api_view(['GET'])
def get_comment(request, pk):
    comments = Comment.objects.get(id=pk)
    serialized_comment = CommentSerializers(comments, many=False)
    return Response(serialized_comment.data)


@api_view(['POST'])
def add_comment(request):
    new_comment = CommentSerializers(data=request.data)
    if new_comment.is_valid():
        new_comment.save()
    return Response(new_comment.data)


@api_view(['GET'])
def get_tagged_posts(request, tag):
    posts = Post.objects.all()
    tag = get_object_or_404(Tag, slug=tag)
    tagged_posts = posts.filter(tags__in=[tag])
    serialized_res = PostSerializers(tagged_posts, many=True)
    return Response(serialized_res.data)


@api_view(['GET'])
def get_simillar_post(request, pk):
    post = Post.objects.get(id=pk)
    post_tags_ids = post.tags.values_list('id', flat=True)
    similar_posts = Post.objects.all().filter(tags__in=post_tags_ids).exclude(id=post.id)
    similar_posts = similar_posts.annotate(same_tags=Count('tags')).order_by('-same_tags', '-published')[:4]
    result = PostSerializers(similar_posts, many=True)
    return Response(result.data)

# @api_view(['POST'])
# def add_post(request): 
#   new_post = PostSerializers(data=request.data)
#    if new_post.is_valid():
#        new_post.save()

#    return Response(new_post.data)


# @api_view(['POST'])
# def update_post(request, pk):
#    post = Post.objects.get(id=pk)
#    updated_post = PostSerializers(instance=post, data=request.data)

#   if updated_post.is_valid():
#        updated_post.save()

#    return Response(updated_post.data)


# @api_view(['DELETE'])
# def delete_post(request, pk):
#    post = Post.objects.get(id=pk)
#   post.delete()

#   return Response("Deleted the post")
