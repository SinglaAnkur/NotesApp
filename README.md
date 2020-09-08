# NotesApp

It is a notes taking app. It will allow you to add a note, remove a note , read a note and list all the notes through command line argument input. 
The application has been built in Node JS and makes use of arrow functions and shorthand syntax.

### Installing
Install Node.js and Visual Studio Code. Both are free, open source, and available for all operating system.
Below are links to both tools.
Links:
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

The application uses some npm modules which needs to be installed before moving ahead.
Yargs is an npm module to set up a more complex set of arguments for your application.
```
npm install yargs@12.0.2
```
Chalk is an npm module for terminal string styling. 
```
npm i chalk
```
Below is an example script stored in a file named index.js.
```
console.log('Hello Node.js!')
```
Running a Script:
```
$ node index.js
Hello Node.js!
```

### Running the code
Adding a note
```
$ node app.js add --title="Grocery" --body="Rice, Sugar, Bananas"
New note added
```
Listing notes
```
$ node app.js list
Your Notes
list1
Grocery
```
Reading a note
```
$ node app.js read --title="Grocery"
Grocery
Rice, Sugar, Bananas
```

Removing a note
```
$ node app.js remove --title="Grocery"
Note removed!
```
## Acknowledgments
I would like to gratefully and sincerely thank Prof. Andrew Mead for his guidance, understanding through course The Complete Node.js Developer Course (3rd Edition) on Udemy.com
