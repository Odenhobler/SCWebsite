from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('blabla', views.blabla, name='blabla'),
    path('ask_for_table', views.ask_for_table, name='ask_for_table'),
]

