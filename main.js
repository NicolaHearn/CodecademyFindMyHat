const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



class Field {
    constructor(fieldArray) {
        this.field = fieldArray,
            this.startLocationY = 0
        this.startLocationX = 0
    }
    print() {
        let fieldString = [];
        for (let i = 0; i < this.field.length; i++) {
            fieldString += this.field[i].join('') + '\n';
        }
        return fieldString;
    }

    xyLocation() {
        let y = this.startLocationY;
        let x = this.startLocationX;


        if (symbol === 'l') {
            x = this.startLocationX = -1;
        } else if (symbol === 'r') {
            x = this.startLocationX = + 1;
        } else if (symbol === 'd') {
            y = this.startLocationY = +1;
        } else if (symbol === 'u') {
            y = this.startLocationY = -1;
        } else { return 'You have pressed an incorrect key' };

        //let newLocation = '['+y+']'+'['+x+']';

        let arrayLocation = this.field[y][x];
        return arrayLocation;

    }

}

const myField = new Field([
    ['*', 'o', 'o'],
    ['░', 'o', '░'],
    ['░', '^', '*']
])



console.log(myField.print());
const symbol = prompt('Where would you like to move next?');

let answer = myField.xyLocation();

const evaluation = () => {
    if (answer === 'o') {
        return 'You fell in a hole, game over!'
    } else if (answer === undefined) {
        return 'Illegal move, game over!'
    } else { return symbol };
}

console.log(evaluation());


