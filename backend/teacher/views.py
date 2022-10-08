from django.shortcuts import get_object_or_404
from ctypes.wintypes import POINT
from teacher.models import Aula
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from teacher.models import Professor
from teacher.serialyzers import ProfessorSerializer, CadastrarAulaSerializer, AulaSerializer

class ProfessorApiView(APIView):
    def get(self, request, format=None):
        professores = Professor.objects.all()
        serializer = ProfessorSerializer(professores,many=True)
        return Response(serializer.data,status=HTTP_200_OK)


class CadastrarAulaApiView(APIView):
    def post(self, request, id, format = None):
        professor = get_object_or_404(Professor, id=id)
        serializer = CadastrarAulaSerializer(data=request.data)
        if serializer.is_valid():
            aula = Aula(
                nome = serializer.validated_data.get('nome'),
                email = serializer.validated_data.get('email'),
                professor = professor
            )
            aula.save()
            aulaSerializer = AulaSerializer(aula, many = False)
            return Response(aulaSerializer.data,status=HTTP_201_CREATED)
        return Response({"message":"Error","errors":serializer.errors},status=HTTP_400_BAD_REQUEST)



