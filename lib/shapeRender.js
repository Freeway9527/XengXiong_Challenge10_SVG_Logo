const createLogo = require("./createLogo");

//triangle class
class Triangle {
  constructor() {
    //default color
    this.color = "#000";
  }
  //set color for triangle
  setColor(color) {
    this.color = color;
  }
  //render triangle
  render() {
    return `<polygon points="150, 10 50, 180 250, 180" fill="${this.color}" />`;
  }
}

//square class
class Square {
  constructor() {
    this.color = "#000";
  }
  //set color for square
  setColor(color) {
    this.color = color;
  }
  //render square
  render() {
    return `<rect x="65" y="15" width="170" height="170" fill="${this.color}" />`;
  }
}

//circle class
class Circle {
  constructor() {
    this.color = "#000";
  }
  //set color for circle
  setColor(color) {
    this.color = color;
  }
  //render circle
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
