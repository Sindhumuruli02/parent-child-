import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private datafromDS = new BehaviorSubject("Data from data Service")
  currentDataInDataService = this.datafromDS.asObservable();

  constructor() { }

  updateData(data:any){
    this.datafromDS.next(data);
  }
}
  