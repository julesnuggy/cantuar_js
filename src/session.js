class Session {
  constructor(flashcardsObject) {
    this._flashcards = flashcardsObject;
    this._history = [];
    this._selected = {};
  }

  select() {
    var current;
    if (this._history.length >= this._flashcards.length) { throw('All flashcards used!'); };
    current = this.getRandom();
    this._selected = this._flashcards[current];
    this._history.push(current);
    return this._selected;
  };

  genRandom() {
    var number, max;
    max = this._flashcards.length;
    number = Math.floor(Math.random() * Math.floor(max));
    return number;
  };

  checkIfUsed(number) {
    return this._history.includes(number) ? true : false;
  }

  getRandom() {
    var number
    number = this.genRandom();;
    while (this.checkIfUsed(number) === true && this._history < this._flashcards.length) {
      number = this.genRandom();
    }
    return number;
  }

  clearHistory() {
    this._history = [];
  }

};
module.exports = Session;
