from django.shortcuts import render, get_object_or_404
from .models import Asignatura, Proyecto, HobbyImage
from .forms import ProyectoSearchForm

def home(request):
    proyectos_destacados = Proyecto.objects.filter(destacado=True)
    return render(request, 'portfolioweb/home.html', {'proyectos_destacados': proyectos_destacados})

def about_me(request):
    return render(request, 'portfolioweb/about_me.html')

def portfolio(request):
    asignaturas = Asignatura.objects.all()
    return render(request, 'portfolioweb/portfolio.html', {'asignaturas': asignaturas})

def proyectos_por_asignatura(request, asignatura_id):
    asignatura = get_object_or_404(Asignatura, id=asignatura_id)
    proyectos = Proyecto.objects.filter(asignatura=asignatura)
    return render(request, 'portfolioweb/proyectos_por_asignatura.html', {'asignatura': asignatura, 'proyectos': proyectos})

def proyecto_detalle(request, proyecto_id):
    proyecto = get_object_or_404(Proyecto, id=proyecto_id)
    asignatura = proyecto.asignatura  # Asegurándonos de obtener la asignatura relacionada
    return render(request, 'portfolioweb/proyecto_detalle.html', {'proyecto': proyecto, 'asignatura': asignatura})

def explorer(request):
    return render(request, 'portfolioweb/explorer.html')

def search(request):
    form = ProyectoSearchForm(request.GET or None)
    proyectos = Proyecto.objects.all()

    if form.is_valid():
        nombre = form.cleaned_data.get('nombre')
        tecnologias = form.cleaned_data.get('tecnologias')
        tipo_proyecto = form.cleaned_data.get('tipo_proyecto')
        año = form.cleaned_data.get('año')

        if nombre:
            proyectos = proyectos.filter(name__icontains=nombre)
        if tecnologias:
            proyectos = proyectos.filter(tecnologias=tecnologias)
        if tipo_proyecto:
            proyectos = proyectos.filter(tipo_proyecto=tipo_proyecto)
        if año:
            proyectos = proyectos.filter(año=año)

    return render(request, 'portfolioweb/search.html', {'form': form, 'proyectos': proyectos})

def hobby(request):
    images = HobbyImage.objects.all()
    return render(request, 'portfolioweb/hobby.html', {'images': images})

def settings(request):
    return render(request, 'portfolioweb/settings.html')


