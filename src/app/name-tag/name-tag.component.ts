import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.css']
})
export class NameTagComponent implements OnInit {
  //creating a variable that means whatever passed to me will be copied to variable name
 @Input() name: string ; 
  constructor() { }

  ngOnInit() {
  }

}
