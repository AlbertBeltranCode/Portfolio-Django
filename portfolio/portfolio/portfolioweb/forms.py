# forms.py
from django import forms
from .models import Proyecto

class ProyectoSearchForm(forms.Form):
    TIPO_CHOICES = [
        ('Web', 'Web'),
        ('Escritorio', 'Escritorio'),
        ('Móvil', 'Móvil'),
        # Añade más tipos según tus necesidades
    ]
    
    AÑO_CHOICES = [(r, r) for r in range(2020, 2026)]  # Años de 2020 a 2025

    nombre = forms.CharField(required=False, label='Nombre del Proyecto')
    tecnologias = forms.ChoiceField(
        choices=[('', '---------')] + Proyecto.TECNOLOGIAS_CHOICES,
        required=False,
        label='Tecnologías'
    )
    tipo_proyecto = forms.ChoiceField(choices=[('', '---------')] + TIPO_CHOICES, required=False, label='Tipo de Proyecto')
    año = forms.ChoiceField(choices=[('', '---------')] + AÑO_CHOICES, required=False, label='Año de Realización')
