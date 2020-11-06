# docker-intro

To run the app and access it via localhost:3000, choose one of the following methods:

## Manual
* Install nodejs for your OS
* Clone this repository
* Install the app via `npm install`
* Start the app via `node app.js`

## Docker
* Install docker desktop for your OS
* Clone this repository
* Build docker image via `docker build -t dockerintro .`
* Run image via `docker run -d -p 3000:3000 --name node-app dockerintro`
