const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(String("collection"));
    coll.insert(document, (err, result) => {
        assert.equal(err, null);
        console.log("\nInserted " + result.result.n +
            " document(s) into the collection " + collection + "\n");
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(String("collection"));
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log("\nFound:\n\n");
        callback(docs);        
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(String("collection"));
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        console.log("Removed the document ", document);
        callback(result);        
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(String("collection"));
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.equal(err, null);
        console.log("Updated the document with: \n\n", update);
        callback(result);        
    });
};
