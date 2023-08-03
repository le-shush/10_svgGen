// This will serve as the base constructor for all shape objects, inheriting the color chosen by the user through inquirer.

class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="100" height="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50,0 15,87 85,87" fill="${this.color}" />`;
    }
}


module.exports = { Circle, Square, Triangle };