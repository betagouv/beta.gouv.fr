---
title: How I removed two databases in one pull request
authors: tge
---

My first project right after school was called KISS which means

*[Keep it simple, stupid](https://en.wikipedia.org/wiki/KISS_principle)*


Three years and a few IT projects later, I thought that I got it right and applied the following rules:

* keep your applications small and simple,
* remove most of its complexity,
* don't over-engineer,
* all code and user stories have to be maintained (<abbr title="You Ain't Gonna Need It">YAGNI</abbr>)


Yet a few weeks ago, I learned that you can always remove useless things. You just don't know it yet.

<!--more-->

### Story time

I wanted to create an API above the drugs data set ([freely provided by the French government as CSV files](https://www.data.gouv.fr/fr/datasets/base-de-donnees-publique-des-medicaments-base-officielle/)). I knew that I needed a script to parse and store the data and a web API to expose them. The code is on [github](https://github.com/sgmap/api-medicaments) and the application is [live](http://medicaments.api.gouv.fr).
When I start a web application, I have 2 main choices to make:

* **Choose a platform**: I picked nodejs, for the only reason that I am proficient in it
* **Choose a database**: I took part to a similar project where I used readDB, commonly called mongoDB. It was painfully slow when upserting lots of data, so I chose couchbase instead, a key/value store with a document query language.

After a while I needed "full text" search, so I added elasticsearch, simply because I knew how to use it. It requires a few (ugly) [scripts](https://github.com/sgmap/api-medicaments/blob/de576c3cebd78b3bc80ba3b272669b06718c6e51/bin/prepareDataBase.sh) to automate its synchronization with couchbase.


And suddenly came the *epiphany*! Or to be more precise, I asked for a **review** and after detailing the context, my colleague simply asked: "why don't you remove couchbase?". He was spot on: the dataset fits in memory and it is readonly.
It was replaced with a simple import to load the JSON in memory ready to be queried by the application.
But it got me thinking, couldn’t I remove the second database too? And I learned that there are indeed multiple libraries to search into local documents: I just used [lunr](http://lunrjs.com/) and could therefore remove both databases.


The application is now more simple and reliable:

* The code base has been reduced: 122 untested lines of script, 227 lines of configuration
* The application is now deployed with one image: less reasons to fail
* No more scripts to load the data in the database (the file is read by the application)


Nonetheless, after the refactor, the application was a bit slower even if everything was done in memory. Having said that, response time is still below 20 seconds, so the advantages brought by this removal still exceed the loss of a few milliseconds.


This resulted in a [pull request](https://github.com/sgmap/api-medicaments/pull/12) with twice as many deleted lines as added lines and my takeaway would be:

Following KISS principles is more difficult than it seems: you can always question yourself but you should more likely seek for feedback from your peers. And, instead of choosing a database straight away, I would now choose a place to store my data.


Happy coding!
