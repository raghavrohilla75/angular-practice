import { BrowserModule } from '@angular/platform-browser';  // consists of directives
import { NgModule } from '@angular/core';  //decorator

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import {CustomersModule} from './customers/customers.module' ;
import { AppComponent }  from './app.component';
import {SharedModule} from './shared/shared.module' ;
import {CoreModule} from './core/core.module'

@NgModule({
  declarations: [
    AppComponent,
    // CustomersComponent
  ],
  //buckets or a modules
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CustomersModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  //BootStrap is the startup component when it goes to the web page

  bootstrap: [AppComponent] //if we have bunch components which one is the first one which will run.
})
export class AppModule { }


// so angular components are like lego game pieces. these pieces has to ba put into a bucket called module. 


//the first thing which fires up first in an application is main.ts thus we can know now that why app.module first loads up. 