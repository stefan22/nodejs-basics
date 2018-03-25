# <kbd>mongo install</kbd>   &nbsp; :surfer:

- download mongo binary tar file
- extract file
- from terminal:
	+ go to downloads folder
	+ to bin(server) directory in mongo folder
	+ copy to /usr/local/bin

> homebrew chooses a different path automatically -at least it did to me 
> (in which case you'll have to include path in bash file and make sure it works)         
> downloading file first and installing mongo from terminal, i think is better.   
> mongo community version -free  &nbsp; :scissors:


ex: (is copying all files inside of bin folder in mongo downloaded file)

<kbd>1-</kbd> place files into usr/loca/bin folder &nbsp; :pill:	

```
> sudo cp * /usr/local/bin
```

<kbd>2-</kbd> create mongo db directory (data/db is default path needed to create)  &nbsp; :pill:

```
> sudo mkdir -p data/db
```

<kbd>3-</kbd> open up permissions so that a reg user can access dir  &nbsp; :pill: 

```
> sudo chmod 777 /data
> sudo chmod 777 /data/db
```

« ……………………………………… done ∆

<kbd>4-</kbd> start server ………… ≈∑œ©•˙©¡∞∞«œ

```
> mongod
```

<kbd>5-</kbd> make sure it works by inserting data in database   &nbsp; :pill:

* open another terminal tab

```
   > type: mongo to access mongo database terminal (shell)

   > type: db.users.insert({"name":"pizza"})

```


## mongo document handling  &nbsp; :clipboard:


* request for `all` documents containing `John` as the `first name`   &nbsp; :pill: 

```
>  db.users.find({first_name: "John"})

```

* if `no match`,then `nothing` get `returned` no errors field   &nbsp; :pill: 

```
>  db.users.find({address: { $exists: true }})

```

*  `remove` John from users table   &nbsp; :pill:

```
> db.users.remove({first_name: "John"})

```

* update (overkill)  &nbsp; :pill:

```
> db.users.update({first_name: "John"})

```

* get phone number for everyone in db   &nbsp; :pill:

```
> db.users.find({},{"phone":1})

```






