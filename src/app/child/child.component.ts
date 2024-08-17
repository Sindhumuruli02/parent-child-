import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent : string = "";
  @Input() noteDetails : any;
  @Output() sendDataToParent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(id:any){
    this.sendDataToParent.emit(id);
  }
}

