# Generated by Django 5.1.6 on 2025-02-20 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioweb', '0009_alter_proyecto_tipo_proyecto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='tecnologias',
            field=models.CharField(choices=[('Python', 'Python'), ('Django', 'Django'), ('JavaScript', 'JavaScript'), ('PHP', 'PHP'), ('PHP', 'PHP')], default='Python', max_length=20, verbose_name='Tecnologías'),
        ),
    ]
