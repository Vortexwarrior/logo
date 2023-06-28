const {circle, square, triangle} = require("./shapes")

describe('circle', () => {
    test('should set shape color to green', ()=> {
        const shape = new circle();
        var color = ('green');
        circle.setColor('green');
        const expected = `<circle cx="150" cy="100" r="80" style:"fill=${color}" />`;
        expect(shape.render()).toEqual(expected);
    });
});

describe('square', () => {
    test('should set shape color to blue', ()=>{
        const shape = new square();
        var color = ('blue');
        square.setColor('blue');
        const expected = `<rect x="50" width="200" height="200" style:"fill=${color}"/>`;
        expect(shape.render()).toEqual(expected);
    });
});

describe('triangle', () => {
    test('should set shape color to purple', ()=>{
        const shape = new triangle();
        var color = ('purple');
        shape.setColor('purple');
        const expected = `<polygon height='100%' width='100%' points="0,200 300,200 150,0" style:"fill=${color}" />`;
        expect(shape.render()).toEqual(expected)
    });
});