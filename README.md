# jwt_backend
Repo for JWT authentication app, server side
to be used in conjunction with https://github.com/hygtfrde/jwt_frontend

# Dependencies and Library Packages
Node.js is required, as well as NPM packages:
### bcryptjs
    crypto encoding and hashing (for password storage) <br>
### body-parser
    format JSON requests and responses <br>
### cors
    configure allowed headers and access <br>
### express
    node.js framework for API dev, HTTP/S <br>
### jsonwebtoken
    generate and verify token signatures, payloads, and secrets <br>
### mongoose
    - Object Document Mapping to interface with Mongo DB <br>
    
# How to install and run

### Backend API and Database
In the /backend, first make sure that mongodb is installed. For example, if using Homebrew on Mac, start a DB instance with:
`brew services start mongodb/brew/mongodb-community`
and stop it with:
`brew services stop mongodb/brew/mongodb-community`
Use `mongosh` to access DB cli or MongoDB Compass for GUI.
List instances of mongodb on your machine:
`mongod --dbpath /usr/local/var/mongodb/`
Mongo can be installed other ways, by installing the binary for your OS and by compiling the program from source.
For official binaries: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
Or the steps to build from source:
https://github.com/mongodb/mongo/blob/master/docs/building.md 

For deployments outside of localhost, configure your remote or cloud mongo instance, then provide the URI to the .env variable `REMOTE_DB_URI` using `process.env`

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


