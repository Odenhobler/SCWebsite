from django.shortcuts import render # not sure if needed, but I suppose thats where it learns SQL from, isn't it?
from . import models
from inspect import currentframe, getframeinfo

frameinfo = getframeinfo(currentframe())
currentline = frameinfo.lineno

print("debugging: es läuft bis Zeile ")
print(currentline)

def produce_league_table():
    print("HELLO!!1111!")
