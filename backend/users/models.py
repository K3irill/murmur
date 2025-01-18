from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    """
    Менеджер для кастомной модели пользователя без поля 'username'.
    """
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email обязателен")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if not extra_fields.get('is_staff'):
            raise ValueError("Суперпользователь должен иметь is_staff=True.")
        if not extra_fields.get('is_superuser'):
            raise ValueError("Суперпользователь должен иметь is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    """
    Кастомная модель пользователя без поля 'username'.
    """
    username = None  # Убираем поле 'username'
    email = models.EmailField(max_length=250, unique=True)
    name = models.CharField(max_length=50, blank=True)
    password = models.CharField(max_length=250)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    USERNAME_FIELD = 'email'  # Устанавливаем email как уникальный идентификатор
    REQUIRED_FIELDS = []  # Поля, обязательные для ввода при создании суперпользователя

    objects = CustomUserManager()  # Привязываем кастомный менеджер

    class Meta:
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'

    def __str__(self):
        return self.email  # Используем email вместо username

    # Переопределяем связи для совместимости
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',
        blank=True
    )
