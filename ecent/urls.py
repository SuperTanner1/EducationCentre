from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.ecent, name='ecentapp'),
    path('<path:path>', views.ecent, name='ecent-with-path')
]