# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-11-25 13:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Area',
                'verbose_name_plural': 'Areas',
            },
        ),
        migrations.CreateModel(
            name='AreaPerfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ponderado', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('area', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.Area')),
            ],
        ),
        migrations.CreateModel(
            name='Competencia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Competencia',
                'verbose_name_plural': 'Competencias',
            },
        ),
        migrations.CreateModel(
            name='CompetenciaPerfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ponderado', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('competencia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.Competencia')),
            ],
        ),
        migrations.CreateModel(
            name='Dimension',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Dimension',
                'verbose_name_plural': 'Dimensiones',
            },
        ),
        migrations.CreateModel(
            name='DimensionPerfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('dimension', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dimperfils', to='gperfil.Dimension')),
            ],
        ),
        migrations.CreateModel(
            name='Escala',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=60)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Escala',
                'verbose_name_plural': 'Escalas',
            },
        ),
        migrations.CreateModel(
            name='EscalaDimension',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('puntaje', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('dimensionperfil', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='escsdims', to='gperfil.DimensionPerfil')),
                ('escala', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.Escala')),
            ],
        ),
        migrations.CreateModel(
            name='Perfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Perfil',
                'verbose_name_plural': 'Perfiles',
            },
        ),
        migrations.CreateModel(
            name='Subarea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Subarea',
                'verbose_name_plural': 'Subareas',
            },
        ),
        migrations.CreateModel(
            name='SubareaPerfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('areaperfil', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.AreaPerfil')),
                ('subarea', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.Subarea')),
            ],
            options={
                'verbose_name': 'SubareaPerfil',
                'verbose_name_plural': 'SubareaPerfiles',
            },
        ),
        migrations.AddField(
            model_name='dimensionperfil',
            name='perfil',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.Perfil'),
        ),
        migrations.AddField(
            model_name='competenciaperfil',
            name='subareaperfil',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.SubareaPerfil'),
        ),
        migrations.AddField(
            model_name='areaperfil',
            name='perfil',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gperfil.Perfil'),
        ),
    ]
