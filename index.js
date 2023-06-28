const {circle, square, triangle} = require('./lib/shapes');
const inquirer = require(`inquirer`);
const fs = require(`fs`);

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'what color would you like your text to be',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'what shape would you like',
        choice: ['Circle', 'Square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'what color would you like your shape to be',
    },
];

inquirer.Prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const shapeObj = new shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch (shape) {
        case 'triangle':
            const triangle = new triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
        case 'Circle':
            const circle = new circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'square':
            const square = new square();
            square.setcolor(shapeColor);
            svgElement = square.render();
            break;    
    }

    let x = 150, y = 120;
    if (shape === 'triangle'){
        y = 135; 
    } else if (shape === 'sqaure'){
        y = 145;
    }

    const finalSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgElement}
    <text x="${x}" y-'${y}' fill='${textColor}' font-size="50" text-anchor="middle">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', finalSvg);

    console.log('made logo.svg');

});