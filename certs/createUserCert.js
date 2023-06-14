use admin
db.createUser({
  user: "certUser",
  roles: [
    { role: "username-admin", db: "admin" },
    { role: "readWrite", db: "database-name" }
  ],
  authenticationRestrictions: [
    { clientCertificateIssuer: "CN=mongodb-client-ca" }
  ]
})