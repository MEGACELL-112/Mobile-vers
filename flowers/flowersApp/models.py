from django.db import models

# Create your models here.
class Review(models.Model):
    heading = models.CharField(max_length = 200)
    image = models.ImageField(upload_to = "images/")
    text = models.TextField()
class Comment(models.Model):
    text = models.TextField()

# Что бы обновить базу данных : python manage.py makemigrations
# python manage.py migrate
