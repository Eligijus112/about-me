from django.contrib import admin
from django.urls import include, path 
from django.conf import settings
from django.conf.urls.static import static 
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('about_me.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
