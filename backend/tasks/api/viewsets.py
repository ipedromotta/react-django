from rest_framework import viewsets
from tasks.api import serializers
from tasks import models

class TasksViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TasksSerializer
    queryset = models.Tasks.objects.all()