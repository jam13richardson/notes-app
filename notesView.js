const NotesModel = require('./notesModel'); 

class NotesView {
    constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
      this.buttonEl = document.querySelector('#add-note-button');

      this.buttonEl.addEventListener('click', () => {
        this.displayNotes();
      })
    }
    
    displayNotes() {
      // const notes = this.model.getNotes()
  
      // For each note, create and append a new element on the main container
      // notes.forEach(note => {
      //   const noteEl = document.createElement('div');
      //   noteEl.textContent = note;
      //   noteEl.className = 'note';
      //   this.mainContainerEl.append(noteEl);
      
      //    const note = document.querySelector('#note-input').value;

      //    const noteElement = document.createElement('div');
      //    noteElement.id = 'note';
      //    noteElement.innerText = note;

      //    document.querySelector('#note-input').value = '';

      //    document.querySelector('#main-container').append(noteElement);

      //    document.querySelectorAll('note').forEach(element => {
      //     element.remove();
      //   });

      //   const notes = this.model.getNotes()

      //   notes.forEach(note => {
      //     const noteEl = document.createElement('div');
      //     noteEl.textContent = note;
      //     noteEl.className = 'note';
      //     this.mainContainerEl.append(noteEl);
      //   })
      // }
      // }

        // 1. Remove all previous notes
        document.querySelectorAll('.note').forEach(element => {
          element.remove();
        });
      
        const notes = this.model.getNotes()
      
        // For each note, create and append a new element on the main container
        notes.forEach(note => {
          const noteEl = document.createElement('div');
          noteEl.textContent = note;
          noteEl.className = 'note';
          this.mainContainerEl.append(noteEl);
        })
      }
  

  
  module.exports = NotesView;