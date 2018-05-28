class Flashcard {
  constructor() {
    this._original = '';
    this._translation = '';
    this._object = {};
  }

  create(original, translation) {
    this._original = original;
    this._translation = translation;
    return this._object[this._original] = this._translation;
  }

}
module.exports = Flashcard;
