from django.db import models

# Create your models here.

class Player(models.Model):
    player_name = models.CharField(max_length = 128, primary_key=True)
    elo_number = models.IntegerField()
    position_id = models.IntegerField()

    def toDict(self):
        return {
        "positionId": self.position_id,
        "playerName": self.player_name,
        "eloNumber": self.elo_number,
        }

class Match(models.Model):
    match_id = models.IntegerField(primary_key=True)
    player_a = models.CharField(max_length=128)
    player_b = models.CharField(max_length=128)
    char_a = models.CharField(max_length=128)
    char_b = models.CharField(max_length=128)
    wonsets_a = models.IntegerField()
    wonsets_b = models.IntegerField()
    wonrounds_a1 = models.IntegerField()
    wonrounds_b1 = models.IntegerField()
    wonrounds_a2 = models.IntegerField()
    wonrounds_b2 = models.IntegerField()
    wonrounds_a3 = models.IntegerField()
    wonrounds_b3 = models.IntegerField()
    date_of_match = models.CharField(max_length=12)
    streamlink = models.CharField(max_length=12)
    location_a = models.CharField(max_length=12)
    location_b = models.CharField(max_length=12)
    comments = models.CharField(max_length=12)

    def toDict(self):
        return {
        "matchId": self.match_id,
        "playerA": self.player_a,
        "playerB": self.player_b,
        "charA": self.char_a,
        "charB": self.char_b,
        "wonSetsA": self.wonsets_a,
        "wonSetsB": self.wonsets_b,
        "wonRoundsA1": self.wonrounds_a1,
        "wonRoundsB1": self.wonrounds_b1,
        "wonRoundsA2": self.wonrounds_a2,
        "wonRoundsB2": self.wonrounds_b2,
        "wonRoundsA3": self.wonrounds_a3,
        "wonRoundsB3": self.wonrounds_b3,
        "dateOfMatch": self.date_of_match,
        "streamlink": self.streamlink,
        "locationA": self.location_a,
        "locationB": self.location_b,
        "comments": self.comments,
        }


    
