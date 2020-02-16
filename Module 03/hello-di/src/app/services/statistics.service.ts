import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    stats: string[] = [];

    log(action: string) {
        this.stats.push(action);
        console.log('Statistics ' + action);
    }

    constructor() {
        console.log('Statistics Service Created');
    }
}