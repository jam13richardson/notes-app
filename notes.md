# What is model class in JS?

State/logic of our application
Models are data structures that we use to define the shape of our data. You might also know them as objects, as in Object Oriented Programming, but in JavaScript everything is an Object, so it's not clear that we are talking about something specific if we just call them Objects.

# About package.json

Creating a package. json file is typically the first step in a Node project,
and you need one to install dependencies in npm. If you're starting a project 
from scratch, you create a package. json file to hold important metadata about your project 
and record your dependencies.

# Notes App

Model class: NotesAppModel
notesAppModel.js
notesAppModel.test.js

Acceptance criteria for NotesAppModel: 
```
const model = new NotesModel();

model.getNotes(); // should return []

model.addNote('Buy milk');
model.addNote('Go to the gym');

model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

model.reset();

model.getNotes(); // should now return []
```