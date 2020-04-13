from django.db import models

# Create your models here.

class Player(models.Model):
    pname = models.CharField(db_column = 'player_name', max_length = 32, primary_key=True)