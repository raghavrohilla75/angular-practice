import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() name: string

  //when you send an action up then you use output and      when you recieve property you use input

  @Output() eventFromInner = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  sendtoOuter(){
    this.eventFromInner.emit(this.name) //when it emits it will send come info from inner component, so it will send the name .
    console.log("Clicked")
  }

}
