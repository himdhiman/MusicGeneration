from django.urls import include, path
from app import views

urlpatterns = [
    path('', views.index, name = 'Index')
]