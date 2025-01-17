from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from .forms import UserRegistrationForm
from django.shortcuts import render

def home(request):
    return redirect('/')

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return redirect('register')  # Используем редирект на страницу с формой

def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')  # Главная страница или любая другая нужная страница
        else:
            return redirect('login')  # Заменить на страницу с ошибкой

    return redirect('login')

def logout_user(request):
    logout(request)
    return redirect('login')

def profile(request, id):
    user = get_object_or_404(CustomUser, id=id)
    return render(request, 'users/profile.html', {'user': user})