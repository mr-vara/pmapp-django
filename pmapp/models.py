""" 
All models used in the Project. 
"""
import os

from datetime import datetime, date
from uuid import uuid4
from django.db import models
from django.contrib.auth.models import *

def get_image_path(instance, filename):
    """ 
    Return image path to store avatar image. 

    Parameters: 
    instance (object): Instance of Project Model 
    filename (string): File name of the avatar image 

    Returns: 
    string: Path to store avatar image
    """
    temp = datetime.now().strftime('%Y%m-%d%H-%M%S-') + str(uuid4())
    return os.path.join('pmapp', 'static', 'photos', str(temp), filename)

class Project(models.Model):
    """ 
    Project Class for project model which keep track of all project instances.
    """
    name = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.IntegerField(default=0)
    avatar = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        """ 
        The constructor for Project class. 

        Returns:
        string: Name of the Project instance.
        """
        return self.name

class Task(models.Model):
    """ 
    Task Class for task model which keep track of all tasks instances.
    """
    project = models.ForeignKey(Project, related_name='tasks', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=False, null=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField(default=date.today)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        """ 
        The constructor for Task class.

        Returns:
        string: Name of the Task instance.
        """
        return self.name

class SubTask(models.Model):
    """ 
    SubTask Class for sub task model which keep track of all sub tasks instances.
    """
    task = models.ForeignKey(Task, related_name='sub_tasks', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField(default=date.today)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        """ 
        The constructor for SubTask class.

        Returns:
        string: Name of the SubTask instance.
        """
        return self.name
