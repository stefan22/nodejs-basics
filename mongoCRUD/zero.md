# mongo  <kbd>:page_with_curl:</kbd>

### NoSQL databases  &nbsp; :nut_and_bolt:

- 4 broad categories
	+ `document databases` (e.g MongoDB)
	+ key-value databases (e.g Redis)
	+ column-family databases (e.g Cassandra)
	+ graph databases (e.g Neo4J)

#### document databases  &nbsp; :hammer:

- A `self-contained` piece of information

	ex:
```	   a JSON document
	   {
		   "name": "pizza",
		   "desc": "an italian dish"
	   }
```


- Why NoSQL 

    * Scalibility => sql databases have difficulty meeting both `availability` and      
                    `consistency` simultaneously.

    * Ease of deployment => A need for object relation mapping.
  						    sql databases require you to match the records in database   
  						    back to objects in the native language (java, or    javascript.. and so on.                             

    * In `NoSQL` databases like a `document` based one, that stores data in `JSON`    
      format, the mapping is straight forward.


- Document databases can `support multiple databases`. They consist of a set of collections.
  A collection is a set of documents.     
  And a `document` is a `JSON document` (with some additional features)         
  	ex:   
  	+   information about the type of a field value. 
  	+   primitive types like UTC date time and ObjectId.  


- Mongo stores the documents in a `BSON` format (binary JSON)


#### mongoDB `ObjectId`  &nbsp; :pencil:

- every `document` in mongo must have an `_id` field that is `unique` (acts as     
  a `primary key` for the document, and unique to `each document`). 

- a `default objectId` is `created` by mongo when you `insert a document`

  ex:

```
	 default objectId added by mongo, in case you dont specify it

	 "_id": ObjectId("54cd75c0boefffeslk99isldffd"),   //long string
	 "name": "john",
	 "age": 33

```


### ObjectId => `stores` some pieces of `information` via this long string  &nbsp; :book:


```
	ex: ObjectId (in mongoDB) 
	______________________________________________________________
	|	       |                   |           |              |
	|   Timestamp  |   Machine ID      |  Proc.    |   Increment  |
	|   (4-bytes)  |    (3-bytes)      |   ID      |   (3-bytes)  |
	|              |                   | (2-bytes) |              | 
        |______________|___________________|___________|______________| 


	* first 4 bytes is the timestamp
	* next 3 bytes stores the machine ID on which Mongo server is running
	* next 2 bytes is the specific mongo process that created the document
	* last 3 bytes is the increment; each new document within a second will       
	  get a new increment value
        * given an `object id` you can for example, retrieve `timeStamp` information:     
	  ex:      
	     //call method . 
	     id.getTimestamp(). //=> will return the time stamp in ISO date format	  	


```
