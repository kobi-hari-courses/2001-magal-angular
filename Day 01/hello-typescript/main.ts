function getNumberFromUser(): number {
    console.log('in getNumber from user');
    let res: number = NaN;

    while (isNaN(res)) {
        let prmpt = prompt('Please enter a number');
        console.log(prmpt);
        if (prmpt !== null) {
            res = parseInt(prmpt);
        }
    }

    return res;
}

class Calculator {
    constructor(
        private a: number, 
        private b: number,
        private c: number
    ) { }

    get determinant(): number {
        return this.b * this.b - (4 * this.a * this.c);
    }

    get numberOfSolutions(): 0 | 1 | 2 {
        if (this.determinant > 0) return 2;
        if (this.determinant === 0) return 1;
        return 0;
    }

    log(): void {
        console.log(`The number of solutions is: ${this.numberOfSolutions}`);
        if (this.numberOfSolutions === 0) return;

        let root = Math.sqrt(this.determinant);

        let sol1 = (-this.b + root) / (2 * this.a);
        console.log(sol1);

        if (this.numberOfSolutions === 1) return;

        let sol2 = (-this.b - root) / (2 * this.a);
        console.log(sol2);
    }
}


let a = getNumberFromUser();
let b = getNumberFromUser();
let c = getNumberFromUser();

let calc = new Calculator(a, b, c);
calc.log();