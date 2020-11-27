const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://USERNAME:PASSWORD@cluster0.krncw.mongodb.net/<dbname>?retryWrites=true&w=majority";
uri = uri.replace("USERNAME", process.env.MONGO_USERNAME);
uri = uri.replace("PASSWORD", process.env.MONGO_PASSWORD);

const client = new MongoClient(uri, { useNewUrlParser: true });


const find = async () => {
    
    let collection;
// client.connect(err => {
//     collection = client.db("sample_airbnb").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
    await client.connect()
    collection = client.db("sample_airbnb").collection("devices")
    collection.find({})
}


module.exports = { find }
