from django.shortcuts import render

# Create your views here.
def ecent(request, path=''):
    return render(request, 'index.html', context={'context_variable':'value'})