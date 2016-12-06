var defaultFrameRate = 30;
var hangmanDrawing = new HangmanDrawing(100, 100);
var words = ['javascript', 'Lorem', 'Ipsum', 'Foo', 'Bar'];
var game = new Game("word");

function setup() {
  //set framerate
  frameRate(defaultFrameRate);

  var myCanvas = createCanvas(280, 300);
  myCanvas.parent('canvas');
  // canvas bg-color
  background(50);
  // draw the gallows
  hangmanDrawing.setDefaults();
  hangmanDrawing.drawGallows();

  var randomWord = words[Math.floor(Math.random()*words.length)];
  game.startGame(randomWord);

}


function draw() { }

function keyPressed() {
  if (game.state != 'lost') {
    if (!game.matchChar(key)) {
      hangmanDrawing.drawNext(game.life--);
      if(game.life === 0){
        game.state = 'lost';
      }
    }
  }
};
