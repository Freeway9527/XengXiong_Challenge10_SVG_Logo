const inquirer = require("inquirer");
const fs = require("fs");
const createLogo = require("./lib/createLogo");
const { Triangle, Square, Circle } = require("./lib/shapeRender");
const { writeToFile } = require("./lib/fileHandler");

//function to startthe logo creation process
function init() {
  inquirer
    .prompt([
      //prompt for text input
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters you want your LOGO to display:",
        validate: (textInput) => {
          if (textInput.length >= 1 && textInput.length <= 3) {
            return true;
          } else {
            console.log("\n Please enter between 1 and 3 characters.");
            return false;
          }
        },
      },

      {
        type: "list",
        name: "textColorType",
        message: "How would you like to specify the text color?",
        choices: ["Color Keyword", "Hexadecimal"],
      },
      {
        type: "input",
        name: "textColor",
        message: (answers) => {
          return answers.textColorType === "Color Keyword"
            ? "Enter a color keyword:"
            : "Enter a hexadecimal color code:  (#FF0000):";
        },
        validate: (textColorInput, answers) => {
          if (answers.textColorType === "Color Keyword") {
            //validate color keyword
            const colorKeywordPattern = /^[a-zA-Z]+$/;
            if (colorKeywordPattern.test(textColorInput)) {
              return true;
            } else {
              console.log(
                "\n Please enter a valid color keyword for text color."
              );
              return false;
            }
          } else {
            //validate hexadecimal color code
            const hexPattern = /^#[0-9A-Fa-f]{6}$/;
            if (hexPattern.test(textColorInput)) {
              return true;
            } else {
              console.log(
                "\n Please enter a valid hexadecimal color code for text color."
              );
              return false;
            }
          }
        },
      },
      // Prompt for specifying shape color type and shape color
      {
        type: "list",
        name: "colorType",
        message: "How would you like to specify the shape color?",
        choices: ["Color Keyword", "Hexadecimal"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: (answers) => {
          return answers.colorType === "Color Keyword"
            ? "Enter a color keyword:"
            : "Enter a hexadecimal color code: (#FF0000):";
        },
        validate: (shapeColorInput, answers) => {
          if (answers.colorType === "Color Keyword") {
            //validate color keyword
            const colorKeywordPattern = /^[a-zA-Z]+$/;
            if (colorKeywordPattern.test(shapeColorInput)) {
              return true;
            } else {
              console.log(
                "\n Please enter a valid color keyword for shape color."
              );
              return false;
            }
          } else {
            //validate hexadecimal color code
            const hexPattern = /^#[0-9A-Fa-f]{6}$/;
            if (hexPattern.test(shapeColorInput)) {
              return true;
            } else {
              console.log(
                "\n Please enter a valid hexadecimal color code for shape color."
              );
              return false;
            }
          }
        },
      },
      //prompt for selecting the shape of the logo
      {
        type: "list",
        name: "selectShape",
        message: "What shape would you like the logo to render as?\n",
        choices: ["Triangle", "Circle", "Square"],
      },
    ])
    .then((answers) => {
      //create logo based on user input
      const logoContent = createLogo(answers);

      //write the logo content to a file
      writeToFile("./examples/logo.svg", logoContent);

      console.log("Logo successfully created and saved to 'logo.svg'");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
//initialization function to start the program
init();
