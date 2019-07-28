from django.contrib import admin
from django.urls import include, path 
from django.conf import settings
from django.conf.urls.static import static 
from django.views.static import serve
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('about_me.urls')),
]

if not settings.DEBUG:

    urlpatterns += [
        url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
        path('/admin/doc/', include('django.contrib.admindocs.urls')),
        url(r'^media/(?P<path>.*)$', serve,
             {'document_root': settings.MEDIA_ROOT, }),
    ]

else:

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
