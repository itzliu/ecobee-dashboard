from django.urls import path
from . import views

urlpatterns = [
    path("checkAPI", views._check_api),
    path("authorize/<str:key>", views._authorize),
    path("create", views._create),
    path("update", views._update),
    path("delete/<str:key>", views._delete),
    path("", views._get_apps),
    path("getUserThermostats", views._get_user_thermostats),
    path("getAppThermostats/<str:key>", views._get_app_thermostats),
    path("thermostat/<str:identifier>", views._get_thermostat),
    path(
        "thermostats/<str:key>/<str:identifier>/runtimeReport",
        views._get_runtime_report,
    ),
]
