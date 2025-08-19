from django.urls import path
from IntPedia.views import index

urlpatterns = [
    path('', index)
]