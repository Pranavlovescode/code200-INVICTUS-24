from flask import Flask,request,jsonify
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from datetime import datetime
import pandas as pd

app = Flask(__name__)

client = MongoClient('mongodb+srv://SAPP_SERVER:CCKB_2004@sapp.bba6dy5.mongodb.net/?retryWrites=true&w=majority') #connection string
db = client['InternData'] #Database name

bcrypt = Bcrypt(app)

df = pd.read_csv('./glassdoor_jobs.csv')

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
            'clg':clg,
            'date':datetime.today()
        })
        print(result)
        return str(result)
    else:
        return "Invalid request method"


@app.route('/carrier-form',methods=["POST"])
def carrier():
    if request.method == 'POST':
        data = request.get_json()        
        skillset = data['skillset']
        self_rating = data['self_rating']
        company = data['conpany']
        
        result = db.signupData.find_one({
            'skillset':skillset,
            'self_rating':self_rating,
            'company':company,
            'date':datetime.today()
        })
        print(result)
        return str(result)
    else:
        return "Invalid request method"

@app.route('/company-info',methods=['POST'])
def companyData():    
    if request.method=='POST':
        res = request.get_json()
        cname = res['cname']
        cpass = res['cpass']
        cemail = res['cemail']
        hashPass = bcrypt.generate_password_hash(cpass).decode('utf-8')
        cadd=res['cadd']
        cphone=res['cphone']
        result = db.companySignUpData.insert_one({
            'cname':cname,
            'cemail':cemail,
            'cpass':hashPass,
            'cadd':cadd,
            'cphone':cphone, 
            'date':datetime.today()           
        })
        print(result)
        return str(result)   
    

@app.route('/secure/data/pyttsx3/get-the-info')     
def secretData():    
    df.rename(columns={'Unnamed: 0': 'index'}, inplace=True)
    df.set_index('index', inplace=True)
    df.drop(columns=['Founded', 'Industry','Competitors'], axis=1, inplace=True)
    data = df.to_dict('records')    
    db.glassdoor_jobs.insert_many(data)


# seaeching technique using pandas
@app.route('/search/your-job')
def search():
    df.head(50)
    job_title = input("Enter job title keyword: ")
    filtered_df = df[df['Job Title'].str.contains(job_title, case=False, na=False)]
    print(filtered_df)
    return(filtered_df)
    


if __name__=='__main__':
    app.run(debug=True)
