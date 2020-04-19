from django.shortcuts import render # not sure if needed, but I suppose thats where it learns SQL from, isn't it?
from . import models


# from inspect import currentframe, getframeinfo

# frameinfo = getframeinfo(currentframe())
# currentline = frameinfo.lineno
# print("debugging: es läuft bis Zeile ", currentline)

# def create_table_from_matches():
    
    # match_table = {}
    # for x in models.Match.objects.raw('SELECT * FROM matches'):
    #     match_table.update(x)
    # return {
    #     "matchId": match_table.match_id,
    #     "playerA": match_table.player_a,
    #     "playerB": match_table.player_b,
    #     "charA": match_table.char_a,
    #     "charB": match_table.char_b,
    #     "wonSetsA": match_table.wonsets_a,
    #     "wonSetsB": match_table.wonsets_b,
    #     "wonRoundsA1": match_table.wonrounds_a1,
    #     "wonRoundsB1": match_table.wonrounds_b1,
    #     "wonRoundsA2": match_table.wonrounds_a2,
    #     "wonRoundsB2": match_table.wonrounds_b2,
    #     "wonRoundsA3": match_table.wonrounds_a3,
    #     "wonRoundsB3": match_table.wonrounds_b3,
    #     "dateOfMatch": match_table.date_of_match,
    #     "streamlink": match_table.streamlink,
    #     "locationA": match_table.location_a,
    #     "locationB": match_table.location_b,
    #     "comment": match_table.comment,
    #     }
    # return("hallo, ich komme aus der produceleaguetable.py")