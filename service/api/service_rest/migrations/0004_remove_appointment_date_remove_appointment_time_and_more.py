# Generated by Django 4.0.3 on 2022-08-03 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_appointment_vip'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='date',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='time',
        ),
        migrations.AddField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(default='2022-08-02'),
            preserve_default=False,
        ),
    ]
