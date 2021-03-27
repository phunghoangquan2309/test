import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  submit(login:any){
    console.log(login);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
