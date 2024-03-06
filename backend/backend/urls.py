from django.contrib import admin
from django.urls import path, include
from apiApp.views import PostApiView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('posts/', PostApiView.as_view()),
    path('accounts/',include("allauth.urls")),
    path("",include("users.urls")),
]
