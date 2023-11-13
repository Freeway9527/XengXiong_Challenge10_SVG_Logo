const Shape = require("./shapes/Shape.js");
const Triangle = require("./shapes/Triangle.js");
const Square = require("./shapes/Square.js");
const Circle = require("./shapes/Circle.js");

//test for triangle class
test("Triangle class should should return logo with user choice of shape color, text, and text colorr", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  triangle.setText("123");
  triangle.setTextColor("yellow");

  //define the expected pattern
  const expression = new RegExp(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue"><text x="150" y="115" fill="\\w+" text-anchor="middle">\\w+</text></polygon>'
  );
  //check to see if match the expected pattern
  expect(triangle.render()).toMatch(expression);
});

//test for square class
test("Square class should should return logo with user choice of shape color, text, and text color", () => {
  const square = new Square();
  square.setColor("red");
  square.setText("ABC");
  square.setTextColor("white");

  //define the expected pattern
  const expression = new RegExp(
    '<rect x="70" y="35" width="160" height="160" fill="red"><text x="150" y="115" fill="\\w+" text-anchor="middle">\\w+</text></rect>'
  );
  //check to see if match the expected pattern
  expect(square.render()).toMatch(expression);
});

//test for circle class
test("Circle class should return logo with user choice of shape color, text, and text color", () => {
  const circle = new Circle();
  circle.setColor("green");
  circle.setText("abc");
  circle.setTextColor("blue");

  //define the expected pattern
  const expression = new RegExp(
    '<circle cx="150" cy="115" r="80" fill="green"><text x="150" y="115" fill="\\w+" text-anchor="middle">\\w+</text></circle>'
  );
  //check to see if match the expected pattern
  expect(circle.render()).toMatch(expression);
});

//test for invalid test
test("Setting invalid text should throw an error", () => {
  //check the shape instance
  const shape = new Shape();

  //check to see if an empty text will throw an error
  expect(() => shape.setText("")).toThrow(
    "Text must be between 1 and 3 characters."
  );

  //check to see if there is any invalid text
  expect(() => shape.setText("TooLong")).toThrow(
    "Text must be between 1 and 3 characters."
  );
});
