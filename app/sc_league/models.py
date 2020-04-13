from django.db import models

# Create your models here.

class Player(models.Model):
     PlayerName = models.CharField(..., max_length=400)