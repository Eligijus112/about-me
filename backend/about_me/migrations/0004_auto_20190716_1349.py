# Generated by Django 2.2.3 on 2019-07-16 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0003_userprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profile_image',
            field=models.FileField(upload_to='profile_pictures'),
        ),
    ]