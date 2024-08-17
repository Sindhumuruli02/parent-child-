import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    localStorage.setItem("id","bb7Pl5YLGSCAFo0mOVlkP7LWtjysIlNLtBVHxqJWgwGReCEiaJqa9xIJS8JpfWzu");
  } 

}
