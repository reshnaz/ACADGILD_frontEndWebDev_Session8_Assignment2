import { Component, OnInit, Input } from '@angular/core';
import { Person } from './../interface/person'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  /**Get the personDetail app component  */
  @Input() personDetail;

  // Object of type "Person" interface
  personList: Person;

  constructor() { }

  ngOnInit() {
  }

}
