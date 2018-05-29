class Flashcard {
  constructor() {
    this._original = '';
    this._translation = '';
    this._object = [];
  }

  create(originalText, translationText) {
    this._original = originalText;
    this._translation = translationText;
    return this._object.push({original: this._original, translation: this._translation});
  }

}
module.exports = Flashcard;
