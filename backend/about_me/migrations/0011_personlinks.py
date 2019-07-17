# Generated by Django 2.2.3 on 2019-07-17 13:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0010_auto_20190717_0856'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonLinks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('github', models.URLField(default='', null=True)),
                ('kaggle', models.URLField(default='', null=True)),
                ('instagram', models.URLField(default='', null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='about_me.Person')),
            ],
        ),
    ]
