class Flashcard {
  constructor(original, translation) {
    this._original = original;
    this._translation = translation;
  }

  edit(original, translation) {
    this._original = original;
    this._translation = translation;
  }
}
module.exports = Flashcard;
