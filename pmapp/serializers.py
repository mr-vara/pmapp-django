from rest_framework import serializers
from . import models

class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SubTask
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    sub_tasks = serializers.SerializerMethodField()
    class Meta:
        model = models.Task
        fields = "__all__"

    def get_sub_tasks(self, task):
        qs = task.sub_tasks.all()
        return SubTaskSerializer(qs, many=True, read_only=True).data

class ProjectSerializer(serializers.ModelSerializer):
    tasks = serializers.SerializerMethodField()
    # tasks = serializers.HyperlinkedRelatedField(
    #     many=True,
    #     read_only=True,
    #     view_name='task-detail'
    # )
    class Meta:
        model = models.Project
        fields = "__all__"
    
    def get_tasks(self, project):
        qs = project.tasks.all()
        return TaskSerializer(qs, many=True, read_only=True).data
