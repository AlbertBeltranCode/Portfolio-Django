from django.db import models

class Asignatura(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Proyecto(models.Model):
    # Definición de opciones para 'tipo_proyecto'
    TIPO_PROYECTO_CHOICES = [
        ('Web', 'Web'),
        ('Escritorio', 'Escritorio'),
        ('Móvil', 'Móvil'),
        # Añade más tipos según tus necesidades
    ]

    # Definición de opciones para 'tecnologias'
    TECNOLOGIAS_CHOICES = [
        ('Python', 'Python'),
        ('Django', 'Django'),
        ('JavaScript', 'JavaScript'),
        ('PHP', 'PHP')
        # Añade más tecnologías según tus necesidades
    ]

    asignatura = models.ForeignKey(Asignatura, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=255)
    full_description = models.TextField()
    technical_description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='project_images/')
    video = models.FileField(upload_to='project_videos/', blank=True, null=True)
    destacado = models.BooleanField(default=False)
    
    # Uso de ChoiceField para 'tipo_proyecto' y 'tecnologias'
    tipo_proyecto = models.CharField(
        max_length=10,
        choices=TIPO_PROYECTO_CHOICES,
        default='Web',
        verbose_name='Tipo de Proyecto'
    )
    tecnologias = models.CharField(
        max_length=20,
        choices=TECNOLOGIAS_CHOICES,
        default='Python',
        verbose_name='Tecnologías'
    )
    año = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class HobbyImage(models.Model):
    title = models.CharField(max_length=100, verbose_name="Título")
    image = models.ImageField(upload_to='hobby_images/', verbose_name="Imagen")

    def __str__(self):
        return self.title
