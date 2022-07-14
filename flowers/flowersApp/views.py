import json
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.http import HttpResponse
from .models import Review, Comment

from django.shortcuts import render
def index(request):

    # comments = [1,2,3,4,5,6]
    # result = []
    # current = []
    # for comment in comments:
    #     current.append(comment)
    #     if len(current) == 2:
    #         result.append(current)
    #         current = []
    # print(result)
    result = []
    current = []
    # for comment in Comment.objects.all():
    #     current.append(comment)
    #     if len(current) == 2 or len(Comment.objects.all()) == 1:
    #         result.append(current)
    #         current = []

    context = {
        "name" : "gambey",
        "reviews": Review.objects.all(),
        # "comments": result,
        "comments": Comment.objects.all(),
    }
    return render(request,"flowersapp/index.html", context)
# Create your views here.
def askQuestion(request):
    context = {

    }
    return render(request,"flowersapp/index.html", context)
def sendEmail(request):
    newContext = []
    for i in request.POST:
        print(request.POST.get(i))
        newContext.append(request.POST.get(i))
    context = {
        "data": newContext
    }
    # Создание переменной для шаблона
    rendered = render_to_string("flowersapp/mail.html", context = context)
    email = EmailMessage("Сообщение с сайта", rendered, to = ["gribacheva-helen@mail.ru"])
    email.content_subtype = "html"
    email.send()
    return HttpResponse("")