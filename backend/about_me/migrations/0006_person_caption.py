# Generated by Django 2.2.3 on 2019-07-16 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0005_auto_20190716_1812'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='caption',
            field=models.CharField(default='', max_length=150, null=True),
        ),
    ]