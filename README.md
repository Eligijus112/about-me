# About me 

A website about me that uses django as back-end and react as front-end. Everything is wrapped up and served using docker. 

# Start up 

First, install docker https://docs.docker.com/install/. 

Then in the console:

```console
sudo docker-compose build
docker-compose up
```

# Architecture

The frontend is run in http://localhost:3000. The framework is **react.js**. It communicates with the backend using APIs and makes requests using the package **axiom**.

The backend is run in http://localhost:8000. The framework is django and django REST API. The database is postgre 10. 

# Usage 

The basic usage is populating the database tables from the admin page and then seeing the results via http://locahost:3000 address. 

# Cloud 

Currently I am using a free tier AWS EC2 virtual machine. When the applications is up, you can view the frontend via: 

http://ec2-13-58-224-148.us-east-2.compute.amazonaws.com:3000/.