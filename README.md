# jwt_backend
public repo for JWT authentication app, server side

## Dependencies and Library Packages
Node.js is required
    bcryptjs
    body-parser
    cors
    express
    jsonwebtoken
    mongoose
    
# How to install and run

### Backend API and Database
In the /backend, first make sure that mongodb is installed. For example, if using Homebrew on Mac, start a DB instance with:
`brew services start mongodb/brew/mongodb-community`
and stop it with:
`brew services stop mongodb/brew/mongodb-community`
Use `mongosh` to access DB cli or MongoDB Compass for GUI.
List instances of mongodb on your machine:
`mongod --dbpath /usr/local/var/mongodb/`

For deployments outside of localhost, configure your remote or cloud mongo instance, then provide the URI to the .env variable `REMOTE_DB_URI` using `process.env`

### ENV file and creds
You will need to provide a mongo connection URI that contains the username, password, provider, cluster, etc. For security reasons, the .env file here only provides local host port numbers.

### Node.js
In the /backend directory, run `npm install` to download the relevant packages. Then run `npm start` to start the API server.

## Architecture
- server.js
- routes/index.js
- controllers
- Mongo DB
- models


