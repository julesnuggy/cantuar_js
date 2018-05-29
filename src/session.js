class Session {
  constructor(flashcardsObject) {
    this._flashcards = flashcardsObject;
    this._history = [];
    this._selected = {};
  }

  select() {
    var current;
    if (this._history.length < this._flashcards.length) {
      current = this.getRandom();
      this._selected = this._flashcards[current];
      this._history.push(current);
      return this._selected;
    } else {
      throw('All flashcards used!')
    };
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
    var number;
    while (this.checkIfUsed(number) === true || number === null) {
      number = this.genRandom();
    }
    return number;
  }

};
module.exports = Session;
