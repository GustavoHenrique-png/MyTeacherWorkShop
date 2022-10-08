from hashlib import blake2b
from tokenize import blank_re
from django.db import models

class Professor(models.Model):
    nome = models.CharField(max_length=100, null=False,blank=False)
    valorHora = models.DecimalField(max_digits=9,decimal_places=2,null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    foto = models.URLField(null=False, blank=False, max_length=255)
    
class Aula(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False)
    professor = models.ForeignKey(to=Professor,on_delete = models.CASCADE,related_name='aulas', null=False, blank=False)
    


