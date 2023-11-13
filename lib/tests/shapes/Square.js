const Shape = require('./Shape');

//square class
class Square extends Shape {
  render() {
    //calculate coordinates for the square and render as SVG Logo
    const halfWidth = 80; 
    const centerX = 150; 
    const centerY = 115; 

    return `<rect x="${centerX - halfWidth}" y="${centerY - halfWidth}" width="160" height="160" fill="${this.color}"><text x="${centerX}" y="${centerY}" fill="${this.textColor}" text-anchor="middle">${this.text}</text></rect>`;
  }
}

module.exports = Square;
