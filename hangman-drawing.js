class HangmanDrawing {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
  }

  setDefaults() {
    stroke(200, 100, 50);
    strokeWeight(1);
    noFill();
  }

  drawNext(bodyMember) {
    switch (bodyMember) {
      case 6:
        this.drawHead()
        break;
      case 5:
        this.drawBody();
        break;
      case 4:
        this.drawLeftArm();
        break;
      case 3:
        this.drawRightArm();
        break;
      case 2:
        this.drawLeftLeg();
        break;
      case 1:
        this.drawRightLeg();
        break;
    }
  }
  drawHead() {
    ellipse(this.xpos+20, this.ypos+10, 30);
  }
  drawBody() {
    strokeWeight(3);
    line(this.xpos + 20, this.ypos + 25, this.xpos + 20, this.ypos + 65);
    this.setDefaults();
  }
  drawLeftArm() {
    line(this.xpos + 20, this.ypos + 30, this.xpos - 0, this.ypos + 50);
    this.setDefaults();
  }
  drawRightArm() {
    line(this.xpos + 20, this.ypos + 30, this.xpos + 40, this.ypos + 50);
    this.setDefaults();
  }
  drawLeftLeg() {
    line(this.xpos + 20, this.ypos + 64, this.xpos - 0, this.ypos + 100);
    this.setDefaults();
  }
  drawRightLeg() {
    line(this.xpos + 20, this.ypos + 64, this.xpos + 40, this.ypos + 100);
    this.setDefaults();
  }

  drawGallows() {
    strokeWeight(10);
    stroke(200);
    line(this.xpos - 50, this.ypos - 50, this.xpos - 50, this.ypos + 150);
    line(this.xpos - 50, this.ypos - 50, this.xpos + 50, this.ypos - 50);
    strokeWeight(2);
    line(this.xpos + 20, this.ypos - 50, this.xpos + 20, this.ypos -6);

    this.setDefaults();
  }

}
