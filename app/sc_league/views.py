from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from . import models
# from sc_league.produceleaguetable import create_table_from_matches

@csrf_exempt # needs to be implemented in order to circumvent some security token check
def index(request):
    return HttpResponse("but backend tells you to go away")

@csrf_exempt 
def blabla(request):
    print("BLABLASLADASD")
    return HttpResponse("but backend tells you to goblabla")

@csrf_exempt 
def ask_for_table(request):
    print("HELLO!!!")
    for p in models.Player.objects.raw('SELECT * FROM league'):
        print(p.player_name, "kann so viel:", p.elo_number)
    ret = {"name": p.player_name,
        "elo": p.elo_number,
        "text": "Hallo, this is ein Text."}
    return JsonResponse(p.toDict(), safe = False)

@csrf_exempt 
def produce_league_table(request):
    # response = create_table_from_matches()  # import from external file
    match_table = models.Match.object.raw('SELECT * FROM matches')
    print(match_table)
    # match_table_2 = {
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
    # return JsonResponse(match_table_2, safe = False)

