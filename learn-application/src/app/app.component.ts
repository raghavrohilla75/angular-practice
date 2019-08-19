import { Component, OnInit } from '@angular/core';

@Component({ 
  //meta data
  selector: 'app-root',
  template: `
    <app-customers></app-customers> 
  `//child component
})
export class AppComponent implements OnInit {
  // title ='Hello World using Data Binding'

  // title: string ;
  constructor() { }

  ngOnInit() {
    // this.title = "Hello World using a service which gets us the data."
  }
  
} 