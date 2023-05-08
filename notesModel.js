class NotesModel {
    constructor() {
       this.model = [];
    }
 
    getNotes() {
       return this.model;
    }
 
    addNote(model) {
       this.model.push(model);
    }
 
    reset() {
       this.model = [];
    }
 }
 
 module.exports = NotesModel;