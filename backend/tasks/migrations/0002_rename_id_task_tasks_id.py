# Generated by Django 4.0.4 on 2022-05-08 22:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tasks',
            old_name='id_task',
            new_name='id',
        ),
    ]
