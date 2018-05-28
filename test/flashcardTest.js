const expect = require('chai').expect;
const Flashcard = require('../src/flashcard.js');
let flashcard

describe('Flashcard', () => {
  beforeEach(() => {
    flashcard = new Flashcard('Neih hou', 'Hello');
  })

  describe('#new', () => {
    it('stores a phrase in the original language', () => {
      expect(flashcard._original).to.equal('Neih hou');
    })

    it('stores a phrase in the translated language', () => {
      expect(flashcard._translation).to.equal('Hello');
    })

    it('returns a key-value pair object', () => {
      expect(flashcard._object).to.eql({'Neih hou': 'Hello'});
    })
  })

  describe('#edit', () => {
    it('changes an existing flashcard original phrase', () => {
      flashcard.edit('Neih hou ma?', 'How are you?')
      expect(flashcard._original).to.equal('Neih hou ma?');
    })

    it('changes an existing flashcard translation phrase', () => {
      flashcard.edit('Neih hou ma?', 'How are you?')
      expect(flashcard._translation).to.equal('How are you?');
    })
  })
})
