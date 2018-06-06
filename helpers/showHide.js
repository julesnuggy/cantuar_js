function showHide(element) {
  console.log('START')
    var target = this.document.getElementById(element);
    console.log(target)

    if (target.getAttribute('display') === 'none') {
      target.setAttribute('display') = 'block'
      console.log("BLOCK")
    } else {
      target.setAttribute('display') = 'none'
      console.log("NONE")
    };
  console.log('END')
}
// module.exports = showHide;
