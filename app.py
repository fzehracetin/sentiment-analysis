from tensorflow.python.keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
import pickle
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

model = load_model('hack_Model.h5')
with open("turkish_tokenizer_hack.pickle", "rb") as handle:
    tokenizer = pickle.load(handle)

parser = reqparse.RequestParser()
parser.add_argument('query')


class SentimentAnalysis(Resource):
    def get(self):
        args = parser.parse_args()
        user_query = args['query']
        print(user_query)
        tokens = tokenizer.texts_to_sequences([str(user_query)])
        tokens_pad = pad_sequences(tokens)
        proba = model.predict(tokens_pad)

        try:
            if proba[0][0] < 0.5:
                predicted = "Negative"
            else:
                predicted = "Positive"
        except:
            predicted = 0
            print("The input's tokens are not in the dictionary and could not be tokenized")

        if predicted == 0:
            return "The input's tokens are not in the dictionary and could not be tokenized"
        else:
            output = {"prediction": predicted, "proba":  str(proba[0][0])}
            print(output)
            return output


api.add_resource(SentimentAnalysis, '/')


if __name__ == '__main__':
    app.run(debug=True, port=8080)
