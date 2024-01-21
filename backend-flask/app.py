from flask import Flask,request,jsonify
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from datetime import datetime
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
        firstName = request.form.get('firstName')
        lastName = request.form.get('lastName')
        email = request.form.get('email')
       
        password = request.form.get('password')

        if password:
            hashPassword = bcrypt.generate_password_hash(password).decode('utf-8')
        else:
            return jsonify({"error": "Password must be non-empty"})
        
        phoneNumber = request.form.get('phoneNumber')
        dob = request.form.get('dob')
        clg = request.form.get('clg')

        result = db.signupData.insert_one({
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'password': hashPassword,
            'phoneNumber': phoneNumber,
            'dob': dob,
            'clg': clg,
            'date': datetime.today()
        })
        print(result)
        return str(result)
    else:
        return "Invalid request method"


@app.route('/carrier-form',methods=["POST"])
def carrier():
    if request.method == 'POST':
             
        skillset = request.form['skillset']
        self_rating = request.form['self_rating']
        company = request.form['conpany']
        
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
        cname = request.form['cname']
        cpass = request.form['cpass']
        cemail = request.form['cemail']
        hashPass = bcrypt.generate_password_hash(cpass).decode('utf-8')
        cadd=request.form['cadd']
        cphone=request.form['cphone']
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
    
# 
@app.route('/job-application',methods=['POST'])
def apply():
    if request.method=='POST':        
        
        job_title = request.form['job_title']
        job_type = request.form['job_type']        
        vaccancy = request.form['vaccancy']
        salary = request.form['salary']
        exp = request.form['exp']
        location = request.form['location']
        desc = request.form['desc']
        result = db.companySignUpData.insert_one({
            
            'job_title':job_title,
            'job_type':job_type,
            'vaccancy':vaccancy,
            'salary':salary, 
            'exp':exp,
            'location':location,
            'desc':desc,
            'date':datetime.today()           
        })
        print(result)
        return str(result)   

    

if __name__=='__main__':
    app.run(debug=True)
