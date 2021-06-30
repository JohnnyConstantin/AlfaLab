from django.shortcuts import render


def index(request):
    context = {}
    template = 'index.html'
    return render(request, template, context)


def home(request):
    context = {}
    template = 'home.html'
    return render(request, template, context)
