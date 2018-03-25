const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mg = require('./mongOps');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'allora';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server: " + url);

  const db = client.db(dbName);

  mg.insertDocument(db, {name:"polenta",description:"italian corn flour dish"},
            "dishes", (result) => {
            console.log(result.ops);
    //find docs
    mg.findDocuments(db, {name:"polenta",description:"italian corn flour dish"},
            (docs) => {
            console.log(docs);
            console.log('\n\n');
      //update docs
      mg.updateDocument(db,{name:"polenta"}, {description:"a very italian dish"}, "dishes",          (result) => {
            //inserted at ops - num
            console.log(result.result);
        //find doc
        mg.findDocuments(db, {name:"polenta",description:"italian corn flour dish"},
            (docs) => {
            console.log(docs);
            console.log('\n\n');
            //drop doc
            mg.removeDocument(db, {name:"polenta",description:"italian corn flour dish"},
            "dishes", (result) => {
                console.log(result.result);
                client.close(); 
            }); //remove doc

        }); //find doc    

      }); // update doc        

    });// find doc

  }); //insert doc

}); //MongoClient