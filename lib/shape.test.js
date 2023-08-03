const { Circle, Square, Triangle } = require('./shapes.js')

describe('Shape validation', () => {

    describe('Circle', () =>
        it('should return true for a specific string that creates a circle on a SVG file', () => {
            const shape = new Circle();

            shape.setColor("red")

            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        }));

    describe('Square', () =>
        it('should return true for a specific string that creates a square on a SVG file', () => {
            const shape = new Square();

            shape.setColor("green")

            expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
        }));


    describe('Triangle', () =>
        it('should return true for a specific string that creates a triangle on a SVG file', () => {
            const shape = new Triangle();

            shape.setColor("blue")

            expect(shape.render()).toEqual('<polygon points="150,18 244, 182 56, 182" fill="blue" />');
        }));
});