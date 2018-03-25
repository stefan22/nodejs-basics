## <kbd>mongo shell</kbd> &nbsp; :coffee:

- by default you're connected to the `test` db

- type `db` to see which database you're currently on 
	+ i've added a .mongorj.js file that shows me that on the prompt etc

- to move/create another db
	+ `use realdeal`

- show all databases
	+ `show dbs`

- you can use javascript queries

- db.numbers.find({"numbers":1}).explain("executionStats")

- db.numbers.find({numbers:1}).explain("executionStats")

- show collections (it's similar to doing tables on sql databases)


## import data into database  &nbsp; :blue_book:

- to find help, go to your terminal and type: (not from shell -regular terminal)
	
	+ `mongo import --help`

	+ `mongoimport --db toursdb  --collection tours --jsonArray --file tours.json`

	  * (imports json data array to a new database called toursdb, tours table, 
		(collection to use) of the type of jsonArray, then file is tours.json)

	  * for help =>  mongoimport --help  	

-  number of collections in db

	+ db.tours.count()



## shell operations  (CRUD)  &nbsp; :skull:

 - finding wine tours in the database

 	+ db.tours.find({"tourTags":"wine"})  //find

 	+ db.tours.insert({                   //create
 		... data

 		})

 	
 	//set (to update)  
	 	
		 + update first to find target to update
		 + then set to make update
 	
 	+ db.tours.update({"tourName": "The Wines of Santa Cruz"},


 		{
 			$set: {"tourRegion": "Central Coast"}
 		}



 	  )	


 	  + add a tourTag to an existing item tourTag array

 	  //find it with update

 	  db.tours.update({"tourName": "The Wines of Santa Cruz"},

 	  ...{
 	  		$addToSet: {"tourTags": "boardwalk"}

 		 }

 	  )


 	  + to delete do:

 	  db.tours.remove({"tourName" : "The Wine of Santa Cruz"})  //that's it.


 	  + to remove a collection:   (use drop)

 	  db.tours.drop()
 	  	=>true




> to `show all collections content` data formatted
> use function below right from shell terminal.     
> I've added it to `.mongorc.js` file and wrap it on a fn named `allCollections()`    

> command + k clears the mongo shell

```
     var collections = db.getCollectionNames();
     for(var i = 0; i< collections.length; i++) {    
        print('Collection: ' + collections[i]);                      // print the name of each collection
        db.getCollection(collections[i]).find().forEach(printjson);  //and then print the json of each of its elements
     }

```























