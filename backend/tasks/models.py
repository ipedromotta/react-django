from django.db import models
from uuid import uuid4

# Create your models here.

class Tasks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    create_at = models.DateField(auto_now_add=True)
