import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  // templateUrl: './filter-textbox.component.html',
  template: `
  Filter: <input type="text" [(ngModel)] = "filter" />
`,
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
      return this._filter;
  }
  
  set filter(val: string) { 
      this._filter = val;
      this.changed.emit(this.filter); //Raise changed event
  }

  //it is a way to send data from child to parent.
  //instead of string you cna put the data what you want to pass.
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
