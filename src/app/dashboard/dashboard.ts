import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  data:any
  subscribe!:Subscription
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.subscribe = this.dataService.currentDataInDataService.subscribe((res)=>{
      console.log("Res",res);
      this.data = res;
    })
    console.log(this.data);
    
  }

  ngOnDestroy(): void {
      this.subscribe.unsubscribe();
  }

}
