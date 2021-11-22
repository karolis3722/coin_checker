const http = require("http");
const {MongoClient} = require('mongodb');
const express = require('express');
let cors = require('cors');
const app = express();
const connection = require("./db/connection.js");
const client = connection.client;
const getMarketValue = require("./routes/getMarketValueRouter");


// async function main(){
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
app.use(cors());
app.use('/getmarketvalue', getMarketValue)

app.listen(9000);