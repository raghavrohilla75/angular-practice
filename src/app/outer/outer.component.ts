import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  nam: string = ''
  @Input() name: string
  constructor() { }

  ngOnInit() {
  }

  eventFromInner(passed: string) {
    this.nam = passed; 
  }
}
