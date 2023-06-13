# Connections to DB
There is a default localhost path provided in the .env file for mongodb. This should be used for development or local.
For hosted or production environments, there is a mongodb script to connect to a remote resource such as Atlas, which requires a URI of the form:
`mongodb+srv://<username>:<password>@<cluster-name>.<provider>.mongodb.net/<database-name>?retryWrites=true&w=majority` <br>
Where the following fields can be found in your Atlas connection and config documents online.
- <username>
- <password>
- <cluster-name>
- <provider>
- <database-name>

# Models
The use of "models" refers to the actual database structure. We can define any sets of data that we may need.

Currently the main model is Users. A single model can be defined as a Schema, called UserSchema,
which has properties and sub-properties, consisting of different types and variables:
`
  UserSchema {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    signup_date: {
      type: Date,
      default: Date.now
    }
  };
`