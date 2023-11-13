const Shape = require("./Shape");

//triandle class
class Triangle extends Shape {
  //render triangle as SVG Logo
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"><text x="150" y="115" fill="${this.textColor}" text-anchor="middle">${this.text}</text></polygon>`;
  }
}

module.exports = Triangle;
