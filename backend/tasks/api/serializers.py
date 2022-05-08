from rest_framework import serializers
from tasks import models

class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tasks
        fields = '__all__'