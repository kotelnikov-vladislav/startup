from django.shortcuts import render
from django.core.mail import send_mail
from django.views import View

# Create your views here.
def index(request):
    return render(request, 'business_card/index.html')


class OrderService(View):
    template_name = 'business_card/order_service.html'

    def get(self, request):
        return render(request, self.template_name)
    
    def post(self, request):
        services = {
            'site-development': 'Разработка сайта',
            'content-creation': 'Создание контента',
            'website-promotion': 'Продвижение сайта',
        }
        count_pages = 'count-pages'
        email = 'email'

        select_services = [services[key] for key in services.keys() if request.POST[key] != '0']
        final_price_of_services = sum([float(request.POST[key]) for key in services.keys()])
        final_price_of_services *= float(request.POST[count_pages])

        email_text = 'Выбраны услуги:\n'
        email_text += '\n'.join(select_services)
        email_text += '\n'
        email_text += f'Количество страниц - {request.POST[count_pages]}'
        email_text += '\n'
        email_text += f'Итоговая цена - {final_price_of_services}'
        email_text += '\n'
        email_text += f'Почта для связи - {request.POST[email]}'


        send_mail(
            'Заказ услуг веб-студии',
            email_text,
            'startup.startupovich@mail.ru',
            ['startup.startupovich@mail.ru']
        )

        return render(request, self.template_name)