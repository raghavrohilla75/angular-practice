import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  nameList = ['raghav','avi','prasad','nawaz','raju']
  constructor() { }

  ngOnInit() {
  }

}
