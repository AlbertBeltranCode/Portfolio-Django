# Generated by Django 5.1.6 on 2025-02-12 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioweb', '0002_rename_description_proyecto_full_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='destacado',
            field=models.BooleanField(default=False),
        ),
    ]
