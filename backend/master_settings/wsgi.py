"""
WSGI config for about_me project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'master_settings.settings')
os.environ.setdefault('DJANGO_CONFIGURATION', os.getenv('DJANGO_CONFIGURATION'))

from configurations.wsgi import get_wsgi_application

application = get_wsgi_application()
