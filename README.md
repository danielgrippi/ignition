Ignition
========
This is just a bunch of useful folder structure and grunt tasks.  Ignition is a convenience thing.

After downloading Ignition and running two commands, you'll have all you need to start on your next single-page app.  The only thing left is installing the dependencies you want via Bower.


# Getting Started
Disclaimer: Ignition depends on **node**.

After cloning Ignition, run these commands in Ignition's root directory:
```
npm install
grunt server
```
Launching `http://localhost:8080` should then launch a sample page sourcing from `app/views`, using compiled, minified sass and tested, minified javascript.

Making changes to javascript and sass files (located under `app/`) will autoreload your browser.
