const { Triangle, Square, Circle } = require("./shapeRender");

//create logo based on user input
function createLogo(userInput) {
  const { selectShape, shapeColor, textColor } = userInput;

  let shapeInstance;

  //creates an instance of the shape based on the user input
  switch (selectShape) {
    case "Triangle":
      shapeInstance = new Triangle();
      break;
    case "Square":
      shapeInstance = new Square();
      break;
    case "Circle":
      shapeInstance = new Circle();
      break;
    default:
      console.log("Unsupported shape.");
      return ""; 
  }

  //set color for the shape
  shapeInstance.setColor(shapeColor);

  //get SVG content of the shape
  const shapeContent = shapeInstance.render();


//fine the center coordinates on shape
  let centerX, centerY;
  if (selectShape === "Triangle") {
    centerX = 150;
    centerY =155;
  } else if (selectShape === "Square") {
    centerX =150;
    centerY = 100;
  } else if (selectShape === "Circle") {
    centerX = 150;
    centerY = 105;
  }

  //properties for logo
  const shapeWidth = 300; 
  const fontSizePercentage = 0.2;
  const fontSize = shapeWidth * fontSizePercentage;

  //generate the SVG logo
  const logoContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeContent}
    <text x="${centerX}" y="${centerY}" style="font-size: ${fontSize}px;" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${userInput.text}</text>
</svg>`;

  return logoContent;
}

module.exports = createLogo;
