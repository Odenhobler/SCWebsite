from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt # needs to be implemented in order to circumvent some security token check
def index(request):
    return HttpResponse("but backend tells you to go away")

@csrf_exempt 
def blabla(request):
    return HttpResponse("but backend tells you to goblabla")

@csrf_exempt 
def ask_for_table(request):
    
    return HttpResponse("but backend tells you to goblabla")

