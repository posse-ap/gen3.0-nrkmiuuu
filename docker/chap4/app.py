from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_flask():
    return 'Hello Flask!'

# p138 
# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def hello_flask():
#     return 'Hello Docker!' 

# p140

# FROM python:3.10
# WORKDIR /usr/src/app
# RUN pip install flask===2.1.1
# CMD ["flask", "run","--host=0.0.0.0"]