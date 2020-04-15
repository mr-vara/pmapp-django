""" 
All Api Serializers used in the Project are defined here. 
"""
from rest_framework import serializers
from . import models

class SubTaskSerializer(serializers.ModelSerializer):
    """ 
    SubTaskSerializer Class for serializing sub task data.
    """
    class Meta:
        model = models.SubTask
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    """ 
    TaskSerializer Class for serializing task data.
    """
    sub_tasks = serializers.SerializerMethodField()
    class Meta:
        model = models.Task
        fields = "__all__"

    def get_sub_tasks(self, task):
        """ 
        Return sub tasks for a task. 

        Parameters: 
        task (object): instance of Task 

        Returns: 
        array: Array of sub task objects for given task.
        """
        qs = task.sub_tasks.all()
        return SubTaskSerializer(qs, many=True, read_only=True).data

class ProjectSerializer(serializers.ModelSerializer):
    """ 
    ProjectSerializer Class for serializing project data.
    """
    tasks = serializers.SerializerMethodField()
    class Meta:
        model = models.Project
        fields = "__all__"
    
    def get_tasks(self, project):
        """ 
        Return tasks for a project. 

        Parameters: 
        project (object): instance of Project

        Returns: 
        array: Array of task objects for given project.
        """
        qs = project.tasks.all()
        return TaskSerializer(qs, many=True, read_only=True).data
