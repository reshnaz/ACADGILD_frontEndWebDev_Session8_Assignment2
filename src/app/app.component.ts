import { Component,OnInit } from '@angular/core';
import { Person } from './interface/person'; //Import file containing "Person" interface
import { PersonService } from './service/person.service'; //Import file containing PersonService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Necessary variable declarations which will be used in html
  personArr:Person[]=[];
  personName:string="";
  personAge:number=null;
  prsn = {} as Person;

  // Creating object of service through constructor
  constructor(private _personService: PersonService) { }
  
  // This function is called from html which in turn calls the functions in our service.
  addPerson(name,age) {

    // Assign input values to interface variables.
    this.prsn={
      pName:name,
      pAge:age
    }

    // Service function called to add person details to array
    this._personService.addPerson(this.prsn);

    // Service function called to return updated person array.
    this.personArr = this._personService.getPerson();
  }

}
