openssl genrsa -out mongodb.key 2048
openssl req -new -key mongodb.key -out mongodb.csr
openssl x509 -req -in mongodb.csr -signkey mongodb.key -out mongodb.crt
