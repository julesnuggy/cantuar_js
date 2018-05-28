class Flashcard {
  constructor(original, translation) {
    this._original = original;
    this._translation = translation;
    this._object = {};
    return this._object[this._original] = this._translation;
  }

  edit(original, translation) {
    this._original = original;
    this._translation = translation;
  }

}
module.exports = Flashcard;
