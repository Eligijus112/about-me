# Generated by Django 2.2.3 on 2019-07-17 08:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0008_auto_20190716_1913'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonExperience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firm', models.CharField(default='', max_length=100, null=True)),
                ('title', models.CharField(default='', max_length=50, null=True)),
                ('description', models.TextField(default='', null=True)),
                ('start_date', models.DateField(blank=True, null=True)),
                ('end_date', models.DateField(blank=True, null=True)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='about_me.Person')),
            ],
        ),
    ]
