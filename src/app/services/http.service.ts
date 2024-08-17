import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http:HttpClient) { }

  getAllNotes(){
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=bb7Pl5YLGSCAFo0mOVlkP7LWtjysIlNLtBVHxqJWgwGReCEiaJqa9xIJS8JpfWzu")
  }
}
