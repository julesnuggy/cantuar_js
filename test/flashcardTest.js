const expect = require('chai').expect;
const Flashcard = require('../src/flashcard.js');
let flashcard

describe('Flashcard', () => {
  beforeEach(() => {
    flashcard = new Flashcard();
  })

  describe('#create', () => {
    it('stores a phrase in the original language', () => {
      flashcard.create('Neih hou', 'Hello');
      expect(flashcard._original).to.equal('Neih hou');
    })

    it('stores a phrase in the translated language', () => {
      flashcard.create('Neih hou', 'Hello');
      expect(flashcard._translation).to.equal('Hello');
    })

    it('returns a key-value pair object', () => {
      flashcard.create('Neih hou', 'Hello');
      expect(flashcard._object).to.eql({'Neih hou': 'Hello'});
    })
  })

})
