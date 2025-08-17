FROM python:3.12-slim
WORKDIR /app
RUN pip install flask
RUN pip install gunicorn
COPY . .
CMD ["gunicorn""--workers=5","--blint","0.0.0.0:5000","main:app"]