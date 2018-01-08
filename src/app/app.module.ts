import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './service/person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PersonService], // Service is called from @NgModule
  bootstrap: [AppComponent]
})
export class AppModule { }
