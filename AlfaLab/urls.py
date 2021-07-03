from django.contrib import admin
from django.urls import path
from AlfaLab import views


urlpatterns = [
    path('', views.index, name='index'),  # index page
    path('admin/', admin.site.urls),  # admin page
    #path('home/', views.home, name='home'),  # home page
]
