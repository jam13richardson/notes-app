const NotesModel = require('./notesModel');
const NotesView = require('./notesView')

console.log ("'The notes app is running'")

const model = new NotesModel();
console.log (model.getNotes());

console.log(this.mainContainerEl);

const view = new NotesView();