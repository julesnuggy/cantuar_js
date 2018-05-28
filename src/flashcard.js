class Flashcard {
  constructor() {
    this._original = '';
    this._translation = '';
  }

  create(original, translation) {
    this._original = original;
    this._translation = translation;
  }
}
module.exports = Flashcard;
