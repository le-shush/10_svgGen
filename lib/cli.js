// This code was created using a number of sources and tools, including the repositories of some of my classmates, online forums, and with the assistence of ChatGPT and GithubCopilot.


const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shape.js')
const SVGgenerator = require('./svg.js');

const fs = require('fs');

// Declare a class constructor that runs the inquirer and obtains the user input
class CLI {
    constructor(){}
    runApp(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'textLogo',
                message: 'Enter text for the logo. (Up to 3 characters)',
                validate: (input) => {
                    if (input.length > 3) {
                        return 'Name must contain up to 3 characters';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a text color',
                validate: function(color) {
                    // Predefined list of color names
                    var colorNames = ["black", "white", "red", "blue", "green", "yellow", "purple", "cyan", "magenta"];
            
                    // Check if color is a valid name
                    if(colorNames.includes(color.toLowerCase())) {
                        return true;
                    }
            
                    // Check if color is a valid hex code
                    var hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
                    if(hexPattern.test(color)) {
                        return true;
                    }
            
                    // If neither, color is not valid
                    return 'Invalid color. Please enter a valid color name or hex code.';
                },
            },
            {
                type: 'input',
                name: 'backgroundColor',
                message: 'Enter a color for the background of the logo',
                validate: function(color) {
                    // Predefined list of color names
                    var colorNames = ["black", "white", "red", "blue", "green", "yellow", "purple", "cyan", "magenta"];
            
                    // Check if color is a valid name
                    if(colorNames.includes(color.toLowerCase())) {
                        return true;
                    }
            
                    // Check if color is a valid hex code
                    var hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
                    if(hexPattern.test(color)) {
                        return true;
                    }
            
                    // If neither, color is not valid
                    return 'Invalid color. Please enter a valid color name or hex code.';
                },
            },
            {
                type: 'list',
                name: 'shapeSelection',
                message: 'Select a shape for the logo',
                choices: ['Circle','Triangle','Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a shape color',
                validate: function(color) {
                    // Predefined list of color names
                    var colorNames = ["black", "white", "red", "blue", "green", "yellow", "purple", "cyan", "magenta"];
            
                    // Check if color is a valid name
                    if(colorNames.includes(color.toLowerCase())) {
                        return true;
                    }
            
                    // Check if color is a valid hex code
                    var hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
                    if(hexPattern.test(color)) {
                        return true;
                    }
            
                    // If neither, color is not valid
                    return 'Invalid color. Please enter a valid color name or hex code.';
                }
            }
            ])
            .then((data)=>{
            console.log(data);
            let shape;
            switch (data.shapeSelection) {
                case "Circle":
                    shape = new Circle();
                    break;

                case "Square":
                    shape = new Square();
                    break;
                case "Triangle":
                    shape = new Triangle();
                    break;
            }

            shape.setColor(data.shapeColor)

            const svgFile = new SVGgenerator();
            svgFile.setShape(shape);
            svgFile.setBackgroundColor(data.backgroundColor)
            svgFile.printLogoText(data.textLogo,data.textColor);
            fs.writeFileSync('./examples/logo.svg', svgFile.render());
            })
            .then(()=>{
            console.log('Logo generated! Check Examples Folder')
            }).catch((err)=>{console.log(err);console.log('An error ocurred try again');})
    }
}

const validColorSelection = ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'aqua', 'black', 'orange'];

module.exports = CLI;