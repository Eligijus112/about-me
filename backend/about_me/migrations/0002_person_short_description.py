# Generated by Django 2.2.3 on 2019-07-15 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='short_description',
            field=models.CharField(default='', max_length=250, null=True),
        ),
    ]
