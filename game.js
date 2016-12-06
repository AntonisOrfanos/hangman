class Game {
  constructor(elem) {
    this.state = 'ongoing';
    this.wordArray = [];
    this.life = 6;
    this.elem = document.getElementById(elem);
  }

  startGame(word) {
    this.word = word;
    this.resolveWord();
  }



  matchChar(char) {
    var found = false;
    var spans = this.elem.getElementsByTagName('span');
    console.log(spans);
    for (var i = 0; i < this.wordArray.length; i++ ) {
      if (this.wordArray[i] == char) {
        found = true;
        spans[i].className = 'show';
        console.log('in');
      }
    }
    return found;

  }

  resolveWord() {
    for (var i = 0; i < this.word.length; i++ ) {
      this.wordArray.push(this.word[i].toUpperCase());
    }
    for (var i = 0; i < this.wordArray.length; i++) {
      var h3 = document.createElement('h3');
      h3.className = 'letter';
      var span = document.createElement('span');
      span.innerText = this.wordArray[i].toUpperCase();
      if (i === 0 || i === this.wordArray.length-1) {
        span.className = 'show';
      } else {
        span.className = 'hide';
      }
      h3.append(span);
      this.elem.append(h3);
    }
  }

}
