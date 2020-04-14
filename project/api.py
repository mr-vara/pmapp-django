from rest_framework import routers
from pmapp import views

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewset)
router.register(r'tasks', views.TaskViewset)
router.register(r'subtasks', views.SubTaskViewset)
