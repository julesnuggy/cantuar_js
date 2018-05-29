const expect = require('chai').expect;
const sinon = require('sinon');
const Session = require('../src/session.js');
var session, flashcardObject, randomStub, selection, number, err

describe('Session', () => {
  beforeEach(() => {
    flashcardObject = [
      {original: 'Neih hou', translation: 'Hello'},
      {original: 'Neih giu jou mut yeh meng ah?', translation: 'What is your name?'}
    ];
    session = new Session(flashcardObject);
  })

  describe('#checkIfUsed', () => {
    beforeEach( () => {
      randomStub = sinon.stub(session, 'getRandom');
      randomStub.returns(1);
    })

    it('returns true if the flashcard has already been used', () => {
      session.select(flashcardObject);
      selection = session.checkIfUsed(1);
      expect(selection).to.equal(true);
    })

    it('returns false if the flashcard has not been used', () => {
      session.select(flashcardObject);
      selection = session.checkIfUsed(0);
      expect(selection).to.equal(false);
    })
  })

  describe('#getRandom', () => {

  })

  describe('#select', () => {
    beforeEach( () => {
      randomStub = sinon.stub(session, 'getRandom');
      randomStub.returns(1);
    })

    it('selects a flashcard at random', () => {
      selection = session.select(flashcardObject);
      expect(selection).to.eql({original: 'Neih giu jou mut yeh meng ah?', translation: 'What is your name?'});
    })

    it('keeps a history of the flashcard object indices already called', () => {
      session.select(flashcardObject);
      expect(session._history).to.eql([1])
    })

    it('throws an error when all cards are used', () => {
      selection = session.select(flashcardObject);
      randomStub.returns(0);
      selection = session.select(flashcardObject);
      expect(() => session.select(flashcardObject)).to.throw('All flashcards used!');
    })
  })

})
