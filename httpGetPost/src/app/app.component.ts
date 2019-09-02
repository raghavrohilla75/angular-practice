import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpGetPost';
  name : string = ''
  age: number
  found: boolean

  constructor(private httpClient: HttpClient){}
  onNameKeyUp(event: any) {
    this.name = event.target.value
    this.found = false
  }

  getProfile() {
    this.httpClient.get(`https://my-json-server.typicode.com/raghavrohilla75/angular-practice/profiles/?name=${this.name}`)
    .subscribe(
      (data: any[]) => {
        // console.log(data)
        if(data.length) {
          this.age = data[0].age
          this.found = true
        }
      }
    )
  }

  //so in post we need throw some data and the server would save the data.
  postProfile() {
    this.httpClient.post(`https://my-json-server.typicode.com/raghavrohilla75/angular-practice/profiles/`,
    {
      name: 'mark',
      age: 41
    })
    .subscribe(
      (data: any[]) => {
        console.log(data)
      }
    )
  }

}

