# CRUD with Express

## Learning Outcomes

[ ] Review: Make an Express app from scratch

[ ] What's a resource?
[ ] What's CRUD/BREAD mean?
[ ] What is REST?

[ ] GET requests are for requesting to _view_ information
[ ] POST requests are for requesting to _change_ information
[ ] Request-response cycle: Every request _must_ get a response

[ ] HTML forms: The most standard way to make POST requests
[ ] Dev tools: How to use the network tab

[ ] How to do HTTP redirects in Express

## Express Review

* Setting up an Express server from scratch
* Making a few routes
* Server-side state

## CRUD (Or... BREAD)

* What's CRUD stand for?
* What are the two reasons that we aren't going to use CRUD in this lecture?

## Resources

* What's a resource?
* Let's make up a bunch of resources
* Resources and routing

## Let's build a BREAD app

* Setting up initial server state
* Setting up GET routes
* Building a form
* Setting up POST routes





## VERBS

**CRUD**

```
Create
Read
Update
Delete
```

**BREAD**

```
Browse
Read
Edit
Add
Delete

## NOUNS

Resources

```
products
carts
playlists
songs
users
tweets
accounts
friends
followers
settings
reviews
calendars
schedules
chats
messages
comments
searches???
restaurants
```



### Our app will have...

```
restaurants
  browse       GET /restaurants
  read         GET /restaurants/:id
  edit         POST /restaurants/:id
  add          POST /restaurants
  delete       POST /restaurants/:id/delete    OR    DELETE /restaurants/:id

  PUT
  PATCH
  DELETE
  OPTIONS


reviews
  browse
  read
  edit
  add
  delete

/restaurants
/restaurants/:id




notifications
  browse
  read
  edit
  add
  delete
maps
  browse
  read
  edit
  add
  delete
sessions
  browse ????
  read ????
  edit ????
  add - login
  delete - logout
```
