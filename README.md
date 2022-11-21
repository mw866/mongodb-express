# MongoDB Express
[![Create and publish a Docker image](https://github.com/mw866/mongodb-express/actions/workflows/deploy-image.yml/badge.svg)](https://github.com/mw866/mongodb-express/actions/workflows/deploy-image.yml)

A demo Expresss app connected to MongoDB with exposed connection string.


## Building container image
```
docker build . -t mw866/mongodb-express:latest -t mw866/mongodb-express:1.1.0 
docker push ghcr.io/mw866/mongodb-express -a
```
