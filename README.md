# Blog-app
It's a simple blog app with lots of features. This was made using the Mern stack

![Screenshot (16)](https://user-images.githubusercontent.com/77377184/203699289-06ce80c1-7b1e-407f-aa3f-eaf836fcc862.png)


features
========
<ol>
<li>users can Register and Login to their account</li>
<li>users can write their own blogs after login to their account</li>
<li>users can update and delete their own blog post if they want to</li>
<li>users can update their own profile details and profile pic </li>
</ol>

To run this project locally
===================
## 1. Clone Repo ##

```
$ git clone https://github.com/krishnadev7/Blog-app.git
$ cd BLOG-APP
```
## 2. Setup MonogDb ##
* create a database at (https://cloud.mongodb.com)
* create .env file at backend root folder
* set MONGO_URI = your mongodb connection url

## 3.Run Backend ##

```
$ cd backend
$ npm install
$ npm start
```
## 4. Run frontend ##
```
#open new terminal
$ cd frontend
$ npm install
$ npm start
```
 
# API #
* for  Registering users = (http://localhost:5000/api/auth/register) `POST Method`
* for  Login  = (http://localhost:5000/api/auth/login) `POST Method`
* for  Update user profile = (http://localhost:5000/api/user/:id) `PUT Mehod`
* for  deleting user = (http://localhost:5000/api/user/:id) `DELETE Method`
* getting user by id = (http://localhost:5000/api/user/:id) `GET Method`
* creating post = (http://localhost:5000/api/post) `POST Method`
* updating post = (http://localhost:5000/api/post/:id) `PUT Method`
* deleting post = (http://localhost:5000/api/post/:id) `DELETE Method`
* getting post by id = (http://localhost:5000/api/post/:id) `GET Method`
* getting  all posts with querys = (http://localhost:5000/api/post?user=) `GET Method`
* creating category = (http://localhost:5000/api/category) `POST Method`
* getting all category = (http://localhost:5000/api/category) `GET Method`


