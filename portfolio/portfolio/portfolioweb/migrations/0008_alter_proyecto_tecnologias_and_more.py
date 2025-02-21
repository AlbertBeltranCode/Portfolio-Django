# Generated by Django 5.1.6 on 2025-02-20 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioweb', '0007_proyecto_año_proyecto_tecnologias_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='tecnologias',
            field=models.CharField(choices=[('Python', 'Python'), ('Django', 'Django'), ('JavaScript', 'JavaScript'), ('React', 'React')], default='Python', max_length=20, verbose_name='Tecnologías'),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='tipo_proyecto',
            field=models.CharField(choices=[('Web', 'Web'), ('API', 'API'), ('Móvil', 'Móvil')], default='Web', max_length=10, verbose_name='Tipo de Proyecto'),
        ),
    ]
