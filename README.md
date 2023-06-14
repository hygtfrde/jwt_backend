# jwt_backend
public repo for JWT authentication app, server side
to be used in conjunction with https://github.com/hygtfrde/jwt_frontend

## Dependencies and Library Packages
Node.js is required, as well as NPM packages:
    - bcryptjs <br>
        -- crypto encoding and hashing (for password storage) <br>
    - body-parser <br>
        -- format JSON requests and responses <br>
    - cors <br>
        -- configure allowed headers and access <br>
    - express <br>
        -- node.js framework for API dev, HTTP/S <br>
    - jsonwebtoken <br>
        -- generate and verify token signatures, payloads, and secrets <br>
    - mongoose <br>
        -- Object Document Mapping to interface with Mongo DB <br>
    
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
You will need to provide a mongo connection URI that contains the username, password, provider, cluster, etc. See the `dotenv-example` file for existing variables being used.

### Node.js
In the /backend directory, run `npm install` to download the relevant packages. Then run `npm start` to start the API server.

## Architecture
- server.js
- routes/index.js
- controllers
- Mongo DB
- models


