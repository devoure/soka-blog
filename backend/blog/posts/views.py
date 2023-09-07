from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializers
from .models import Post


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
    return Response(serialized_post.data)


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
