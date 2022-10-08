
from django.contrib import admin
from django.urls import path
from app.views import HomeApiView
from teacher.views import ProfessorApiView, CadastrarAulaApiView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',HomeApiView.as_view()),
    path('professores/',ProfessorApiView.as_view()),
    path('professores/<int:id>/aulas',CadastrarAulaApiView.as_view())
]
