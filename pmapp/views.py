from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import serializers as se
from . import models
from . import serializers
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

class ProjectViewset(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer
    @action(detail=True,methods=['get'])
    def tasks(self, request, pk=None):
        project = self.get_object()
        tasks = project.tasks.all()
        serializer = serializers.TaskSerializer(tasks,many=True)
        return Response(serializer.data)
        


class TaskViewset(viewsets.ModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer
    @action(detail=True,methods=['get'])
    def sub_tasks(self, request, pk=None):
        task = self.get_object()
        sub_tasks = task.sub_tasks.all()
        serializer = serializers.SubTaskSerializer(sub_tasks,many=True)
        return Response(serializer.data)


class SubTaskViewset(viewsets.ModelViewSet):
    queryset = models.SubTask.objects.all()
    serializer_class = serializers.SubTaskSerializer


def assign(request, task_id):
    task = get_object_or_404(models.Task, pk=task_id)
    try:
        user = User.objects.get(pk=request.GET['user'])
    except (KeyError, User.DoesNotExist):
        return JsonResponse({"success": False})
    else:
        task.user = user
        task.save()
        return JsonResponse({"success": True})

