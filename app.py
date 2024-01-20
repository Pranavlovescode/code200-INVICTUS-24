from flask import Flask,request
from pymongo import MongoClient
from flask_bcrypt import Bcrypt


app = Flask(__name__)

client = MongoClient('mongodb+srv://SAPP_SERVER:CCKB_2004@sapp.bba6dy5.mongodb.net/?retryWrites=true&w=majority') #connection string
db = client['InternData'] #Database name

bcrypt = Bcrypt(app)

@app.route('/')
def helloWorld():
    return '<p>Hello World</p>'

@app.route('/pranav')
def pranav():
    return '<p>This is Pranav</p>'

@app.route('/signup-intern',methods=["POST"])
def intern():
    if request.method == 'POST':
        data = request.get_json()        
        firstName = data['firstName']
        lastName = data['lastName']
        email = data['email']
        password = data['password']
        hashPassword = bcrypt.generate_password_hash(password).decode('utf-8')
        phoneNumber = data['phoneNumber']
        dob = data['dob']
        clg = data['clg']
        result = db.signupData.insert_one({
            'firstName':firstName,
            'lastName':lastName,
            'email':email,
            'password':hashPassword,
            'phoneNumber':phoneNumber,
            'dob':dob,
            'clg':clg
        })
        print(result)
        return str(result)
    else:
        return "Invalid request method"
        


if __name__=='__main__':
    app.run(debug=True)