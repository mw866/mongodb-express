# MongoDB Express
A demo Expresss app connected to MongoDB with exposed connection string.


## Building container image
```
docker buildx create --use # first time
docker buildx build --platform linux/amd64,linux/arm64  -t ghcr.io/mw866/mongodb-express:latest --push .
```