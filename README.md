# jwt_backend
Repo for JWT authentication app, server side
to be used in conjunction with https://github.com/hygtfrde/jwt_frontend

# Dependencies and Library Packages
Node.js is required, as well as NPM packages:
### bcryptjs
    crypto encoding and hashing (for password storage) 
### body-parser
    format JSON requests and responses 
### cors
    configure allowed headers and access 
### express
    node.js framework for API dev, HTTP/S 
### jsonwebtoken
    generate and verify token signatures, payloads, and secrets 
### mongoose
    - Object Document Mapping to interface with Mongo DB 
    
# How to install and run

### Backend API and Database
In the /backend, first make sure that mongodb is installed. For example, if using Homebrew on Mac, start a DB instance with: <br>
`brew services start mongodb/brew/mongodb-community` <br>
and stop it with: <br>
`brew services stop mongodb/brew/mongodb-community` <br>
Use `mongosh` to access DB cli or MongoDB Compass for GUI.
List instances of mongodb on your machine: <br>
`mongod --dbpath /usr/local/var/mongodb/` <br>
Mongo can be installed other ways, by installing the binary for your OS and by compiling the program from source.
For official binaries: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
Or the steps to build from source:
https://github.com/mongodb/mongo/blob/master/docs/building.md 

### User Access and Certificates
For deployments outside of localhost, usernames and passwords can be used for login access. Configure your local or remote cloud mongo instance, then provide the URI to the .env variable `REMOTE_DB_URI` using `process.env` <br>
The default Mongo port on my machine at the time of this writing is 27017. The `models/` folder contains info on establishing connections to databases.
We can also configure access via signed certificates for Mongo. See the `certs` folder for more info.

### ENV file and creds
You will need to provide a mongo connection URI that contains the username, password, provider, cluster, etc. See the `dotenv-example` file for existing variables being used.

### Node.js
In the /backend directory, run `npm install` to download the relevant packages. Then run `npm start` to start the API server.

## Architecture
- server.js
- routes/index.js
- controllers
- Mongo DB
- models


