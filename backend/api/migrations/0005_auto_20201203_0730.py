# Generated by Django 3.1.4 on 2020-12-03 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_userregistration_gender'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userregistration',
            name='id',
        ),
        migrations.AlterField(
            model_name='userregistration',
            name='username',
            field=models.CharField(default='', max_length=100, primary_key=True, serialize=False),
        ),
    ]