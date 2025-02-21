from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about_me/', views.about_me, name='about_me'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('portfolio/asignatura/<int:asignatura_id>/', views.proyectos_por_asignatura, name='proyectos_por_asignatura'),
    path('proyecto/<int:proyecto_id>/', views.proyecto_detalle, name='proyecto_detalle'),
    path('explorer/', views.explorer, name='explorer'),
    path('search/', views.search, name='search'),
    path('hobby/', views.hobby, name='hobby'),
    path('settings/', views.settings, name='settings'),
] 