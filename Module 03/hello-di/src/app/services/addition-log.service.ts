import { StatisticsService } from './statistics.service';
import { AdditionServiceDef } from './addition-service-def';
import { Injectable } from '@angular/core';

@Injectable()
export class AdditionLogService extends AdditionServiceDef {
    id: number;    
    
    constructor(
        private statistics: StatisticsService
    ) {
        super();
        this.id = Math.round((Math.random() * 1000));
        console.log(`Addition Log Service number ${this.id} constructed`);
    }

    add(a: number, b: number): number {
        this.statistics.log('Addition');
        return a + b + 1;
    }


}