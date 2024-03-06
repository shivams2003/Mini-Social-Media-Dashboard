from django.shortcuts import render, redirect

# Create your views here.
from django.contrib.auth import logout 

def home(request):
    print("request hit")
    return render(request,"home.html")

def logout_view(request):
    logout(request)
    return redirect("/")
 