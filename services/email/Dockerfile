FROM python:3.10.12

WORKDIR /code

RUN apt-get update && && apt-get clean
RUN pip install --upgrade pip

COPY ./services/email/requirements.txt /code/requirements.txt

RUN pip install -r /code/requirements.txt

COPY ./services/email/app /code/app

CMD ["uvicorn", "app.main:app"]
