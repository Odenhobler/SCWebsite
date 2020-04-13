from django.db import models

# Create your models here.

class Player(models.Model):
    player_name = models.CharField(max_length = 128, primary_key=True)
    elo_number = models.IntegerField()

    def toDict(self):
        return {"playerName": self.player_name
            , "eloNumber": self.elo_number
        }