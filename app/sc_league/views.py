from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from . import models
from produce_league_table import produce_league_table 

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

