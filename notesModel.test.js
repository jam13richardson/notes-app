const NotesModel = require('./notesModel');

describe('NotesModel', () => {

  test('getNotes returns an emoty array', () => {
    const model = new NotesModel();
       expect(model.getNotes()).toEqual([]);
      });

  test('addNote adds note to array', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });

  test('reset clears all data in array', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
})
