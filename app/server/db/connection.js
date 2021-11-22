const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://user_karolis:root@cluster0.davdr.mongodb.net/test?authSource=admin&replicaSet=atlas-huhr4y-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const client = new MongoClient(uri);

exports.client = client;