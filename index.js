const mongo = require("mongodb").MongoClient;
const express = require('express');
const app = express();
// Intentionally INSECURE!
const MONGODB_CONNECTION_STRING = 'mongodb://wiz:correcthorsebatterystaple@i-057c1117ffe80aff3.ap-southeast-1.compute.internal:27017';
const MONGODB_DATABASE = 'testdb'
const PORT = process.env.PORT || 80
let db;

app.listen(PORT, function () {
    console.log('Listening on port ${PORT}');
})

app.route('/').get((req, res) => {
    db.collection('test').find({}).toArray((err, artifact) => {
        if (err) throw err;
        res.send(artifact);
    })
})

mongo.connect(MONGODB_CONNECTION_STRING, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }

    db = client.db(MONGODB_DATABASE);     
})
