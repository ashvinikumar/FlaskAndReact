# FlaskAndReact.js

This project is the small POC for the implementation of rendering of React.js from Flask.

The project structure has two folders:
  - flask-backend
  - react-frontend

# Steps to run the App locally:
  - Clone the repo
  - cd /FlaskAndReact/react-frontend
  - npm install
  - npm run build
  - cd ../flask-backend
  - python main.py
  - open http://127.0.0.1:5000/
  
After opening the above URL you will be able to see that the message **Hello World!! from Flask to React** is getting rendered from the flask to the React.js template. There are also navigation bar to switch to another page.