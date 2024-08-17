import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../services/http.service';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentData :string = "hello from parent"
  notesList :any[] = [
    // {id:101,title:"note card 1",description:"note card 1 description"},
    // {id:102,title:"note card 2",description:"note card 2 description"},
    // {id:103,title:"note card 3",description:"note card 3 description"},
    // {id:104,title:"note card 4",description:"note card 4 description"},
    // {id:105,title:"note card 5",description:"note card 5 description"},
    // {id:106,title:"note card 6",description:"note card 6 description"},
    // {id:107,title:"note card 7",description:"note card 7 description"},
    // {id:108,title:"note card 8",description:"note card 8 description"},
    // {id:109,title:"note card 9",description:"note card 9 description"},
    // {id:110,title:"note card 10",description:"note card 10 description"}
  ]
  searchQuery:string = "";
  constructor(private httpService: HttpService,private dataService:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.httpService.getAllNotes().subscribe({
      next:(res:any)=>{
        console.log("res",res.data.data);
        this.notesList = res.data.data;
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
  }

  handleUpdateNotesList($event:any){
    // console.log($event);
    this.notesList = this.notesList.filter((note)=> note.id !== $event);
  }

  updateDataInDataService(){
    this.router.navigate(["/dashboard"])
    this.dataService.updateData("data from parent...");
  }

}
 