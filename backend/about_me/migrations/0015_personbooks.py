# Generated by Django 2.2.3 on 2019-07-19 12:32

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0014_auto_20190719_0815'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersonBooks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100, null=True)),
                ('author', models.CharField(default='', max_length=100, null=True)),
                ('book_cover', models.FileField(default='', null=True, upload_to='book_covers')),
                ('user_rating', models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)])),
                ('user_description', models.TextField(default='', null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='about_me.Person')),
            ],
        ),
    ]