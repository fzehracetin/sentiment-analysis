# cbot-sentiment-analysis

Turkish Sentiment Analysis app with negative and positive classes. It uses [Fixy Sentiment Analysis Model](https://github.com/Fixy-TR/fixy) at the backend. Flask Rest Api and Angular web app work separately. So, they have to run separately. For Flask app use the ```python app.py``` command under this directory. Under the angular-web-app directory use the ```ng serve``` command for Angular Web App.

Flask Rest Api uses http://127.0.0.1:8080/ port and Angular web app uses http://localhost:4200/ port. 

#### For using Flask app by itself HTTP get requests can be used.

* With httpie in Windows: ``` http GET http://127.0.0.1:8080/ query=='örnek metin' ```

* With httpie in Unix: ```http http://127.0.0.1:8080/ query=='örnek metin' ```

## Angular Web App
It served at http://localhost:4200/ port.

#### App Before Sending Requests

<img src="https://github.com/fzehracetin/cbot-sentiment-analysis/blob/master/images/sentiment%20analysis.JPG" width=1000 height=500>

#### Request 1

<img src="https://github.com/fzehracetin/cbot-sentiment-analysis/blob/master/images/deneme1.JPG" width=700 height=400>

#### Request 2

<img src="https://github.com/fzehracetin/cbot-sentiment-analysis/blob/master/images/deneme2.JPG" width=700 height=400>




