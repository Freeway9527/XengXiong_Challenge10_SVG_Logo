const Shape = require("./Shape");

//circle class
class Circle extends Shape {
  //render circle shape as a SVG circle
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}"><text x="150" y="115" fill="${this.textColor}" text-anchor="middle">${this.text}</text></circle>`;
  }
}

module.exports = Circle;
