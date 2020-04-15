""" 
All Api views used in the Project are defined here. 
"""
from rest_framework import viewsets
from . import models
from . import serializers

class ProjectViewset(viewsets.ModelViewSet):
    """ 
    ProjectViewset Class for returning project data.
    """
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

class TaskViewset(viewset.ModelViewSet):
    """ 
    TaskViewset Class for returning task data.
    """
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

class SubTaskViewset(viewset.ModelViewSet):
    """ 
    SubTaskViewset Class for returning Sub task data.
    """
    queryset = models.SubTask.objects.all()
    serializer_class = serializers.SubTaskSerializer
    