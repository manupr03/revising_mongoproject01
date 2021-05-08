const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'revising_mongo_task'

MongoClient.connect(connectionURL,{ useNewUrlParser:true},(err, client) => {
    if(err)
    {
        return console.log('unable to connect to db');
    }

    console.log('connection succesful');

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        "name": "Manu",
        "hobby": "coding"
    })
})