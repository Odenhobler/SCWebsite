from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt # needs to be implemented in order to circumvent some security token check
def index(request):
    return HttpResponse("Hier könnte Dein Dummy stehen")