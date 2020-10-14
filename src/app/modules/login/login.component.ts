import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  arrayDocuments = [
    {
      id: 1,
      value: 'Cedula de ciudadanía'
    },
    {
      id: 2,
      value: 'Cedula de extranjería'
    },
    {
      id: 3,
      value: 'Cedula de permiso de residencia'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
