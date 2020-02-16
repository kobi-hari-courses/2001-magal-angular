import { AdditionServiceDef } from './addition-service-def';

export class AdditionService extends AdditionServiceDef {
    public id: number;

    constructor() {
        super();
        this.id = Math.round((Math.random() * 1000));
        console.log(`Addition Service number ${this.id} constructed`);
    }

    add(a: number, b: number): number {
        return a + b;
    }
}