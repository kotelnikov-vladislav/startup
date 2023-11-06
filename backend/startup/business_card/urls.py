from django.urls import path
from . import views

urlpatterns  = [
    path('', views.index, name='index'),
    path('order-service/', views.OrderService.as_view(), name='order-service'),
]