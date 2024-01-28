FROM python:3.10.12

WORKDIR /code

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libffi-dev \
    libssl-dev \
    python3-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip and setuptools, install Cython
RUN pip install --upgrade pip setuptools Cython

COPY ./services/email/requirements.txt /code/requirements.txt

# Install Python dependencies
RUN pip install -r /code/requirements.txt

COPY ./services/email/app /code/app

CMD ["uvicorn", "app.main:app"]
