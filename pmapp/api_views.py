from rest_framework import viewsets
from . import models
from . import serializers

class ProjectViewset(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

class TaskViewset(viewset.ModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

class SubTaskViewset(viewset.ModelViewSet):
    queryset = models.SubTask.objects.all()
    serializer_class = serializers.SubTaskSerializer
    