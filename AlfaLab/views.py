from django.shortcuts import render
from AlfaLab.custom import owl


def index(request):
    return render(request, 'index.html', {'context': owl.owl_list})


def home(request):
    return render(request, 'home.html', {})
