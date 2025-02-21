# Generated by Django 5.1.6 on 2025-02-20 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioweb', '0006_alter_proyecto_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='año',
            field=models.PositiveIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='proyecto',
            name='tecnologias',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='proyecto',
            name='tipo_proyecto',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='technical_description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='project_videos/'),
        ),
    ]
