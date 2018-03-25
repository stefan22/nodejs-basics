## mongoose

- as far as what to use/or choose => it comes down to mongodb being the native node driver, while      
  mongoose is the object modeling tool (that is if you want to use a schema)....so mongoose is the obvious choice in     
  my opinion.

- mongodb driver => allows the node applicaton to communicate with a mongodb server    
  as well as store and retrieve documents from the mongodb server.
  `mongodb` driver also allows you to create collections within a database, add   
   documents to the collections and perform operations.

If we need to have a specific structure for the documents and enforce the structure,
in the database, then you need => mongoose node module.

### mongoose node module
- enables you to define a schema and a structure for your documents stored in MongoDB    
  database. 

### mongoose ODM (object document mapping/data model) 
- use mongoose if you need to add structure to your documents through a schema.
- schema defines the structure of the documents.
- schema defines all the fields, type of fields, and features for validation.
- schema types: string , date, boolean, array ...
