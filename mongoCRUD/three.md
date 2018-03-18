### <kbd>.mongorc.js</kbd>   &nbsp;  :card_index:  

- is a configuration file for the mongo shell.
- i created one within <user> home directory
- it lets you modify things like terminal prompt
- add functions that you can call from mongod termimal


### indexing  &nbsp; :construction:

- it makes file loading faster, and speeds up lookup.
- when making indexes take your queries into consideration
- on `tours json`, I connected tours/ packages with a query to match
  length, and price.

> to examine your queries, you can use `explain(executionStats)`  

- how-to: first run your queries on the shell  &nbsp; :pill:

```
	db.caltrdb.find({"tourPackage":"Chinatown"}).explain("executionStats")

	//under executionStats
	 - see examined => it shows that it examined all 29 documents
	 - it did not take long, but it doesn't need to examine all docs to     
	   get the answer

	 //now set an index for tourPackage

	 db.caltrdb.createIndex({"tourPackage" : 1 })

	 //this time `explain(executionStats)` only had to examined 4 documents
	 //the four document that it needed to returned.

```

## multiple indexing  &nbsp;  :ticket:

```
	ex: `combining` tours that are less than 500 pounds and less than 3 days long
	db.caltrdb.find(
		{"tourPrice": $lte:500 },
		{"tourLength": $lte:3 }
	)

	//executionStats examined all 29 docs     (before indexing)

	// how-to: index          
	db.caltrdb.createIndex({
		tourPrice: 1,
		tourLength: 1
	})

	//after indexing
	//executionStats examined only 10 docs (those returned only)

```


:100:
