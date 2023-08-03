const { Circle, Square, Triangle } = require('./shape.js')

describe('Shape validation', () => {

    describe('Circle', () =>
        it('should return true for a specific string that creates a circle on a SVG file', () => {
            const shape = new Circle();

            shape.setColor("red")

            expect(shape.render()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
        }));

    describe('Square', () =>
        it('should return true for a specific string that creates a square on a SVG file', () => {
            const shape = new Square();

            shape.setColor("green")

            expect(shape.render()).toEqual('<rect x="90" y="40" width="100" height="100" fill="green" />');
        }));


    describe('Triangle', () =>
        it('should return true for a specific string that creates a triangle on a SVG file', () => {
            const shape = new Triangle();

            shape.setColor("blue")

            expect(shape.render()).toEqual('<polygon points="50,0 15,87 85,87" fill="blue" />');
        }));
});