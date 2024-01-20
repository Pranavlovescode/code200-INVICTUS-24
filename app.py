from flask import Flask
app = Flask(__name__)
@app.route('/')
def helloWorld():
    return '<p>Hello World</p>'

@app.route('/pranav')
def pranav():
    return '<p>This is Pranav</p>'

if __name__=='__main__':
    app.run(debug=True)