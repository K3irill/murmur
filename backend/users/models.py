from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True)

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'

    def __str__(self):
        return self.username

    groups = models.ManyToManyField('auth.Group', related_name='users_groups')
    user_permissions = models.ManyToManyField('auth.Permission', related_name='users_permissions')
