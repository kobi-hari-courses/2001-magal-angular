import { AdditionServiceDef } from 'src/app/services/addition-service-def';
import { AdditionLogService } from './../../services/addition-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    {
      provide: AdditionServiceDef,
      useClass: AdditionLogService
    }, 
    {
      provide: AdditionLogService, 
      useExisting : AdditionServiceDef
    }
  ]

})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
