# Стартап

Сайт доступен по адресу: http://vladkoj3.beget.tech/

## Информация о проекте
Проект разрабатывался для стартапа, но сам запуск сайта состоится в середине 2024 года. Весь контент в этом репозитории изменен для возможности публикации в качетсве работы в портфолио.

## Роль в проекте
Разработчик сайта

## Запуск на локальном утройстве
### Frontend
Для запуска сайта установите все зависимости:
```
npm i
```

Теперь можете приступать к разработке:
```
npm run serve
```

### Backend
#### Подготовка
Для запуска сайта создате вирутальное окружение:
```
python -m venv venv
```

И установите необходимые зависимости:
```
pip install -r requirements.txt
```

После необходимо в корне проекта создать .env файл, в котором указать следующие переменные:
```
# Настройка работы сайта
DEBUG = True

# Почта
EMAIL_HOST = 'smtp.mail.ru'
EMAIL_PORT = 2525
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_HOST_USER = 'startup.startupovich@mail.ru'
EMAIL_HOST_PASSWORD = 'MZzJM3srVpx0LshwqcSp'
```

Если в качестве почты используется другой сервер (mail.ru, gmail.ru), то соответсвующую конфигурацию можно найти [здесь](https://pocoz.gitbooks.io/django-v-primerah/content/glava-2-uluchshenie-bloga-s-pomoshyu-rasshirennyh-vozmozhnostej/otpravka-postov-na-e-mail/otpravka-e-mail-v-django.html).

#### Запуск
Для запуска сайта перейдите в директорию _zoofriends_ командой:
```
cd zoofriends
```

И введите в консоль:
```
python manage.py runserver
```