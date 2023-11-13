//class for a generic shape
class Shape {
  //default value for content
  constructor() {
    this.color = "black";
    this.text = "";
    this.textColor = "white";
  }

  //method set up for shape color
  setColor(color) {
    this.color = color;
  }

  //method set up for text content
  setText(text) {
    //validate the text length
    if (text.length >= 1 && text.length <= 3) {
      this.text = text;
    } else {
      //throws an error for invalid text length
      throw new Error("Text must be between 1 and 3 characters.");
    }
  }

  //method for setting up color for shape
  setTextColor(color) {
    this.textColor = color;
  }

  //render the shape
  render() {
    return `<shape>${this.text}</shape>`;
  }
}

module.exports = Shape;
