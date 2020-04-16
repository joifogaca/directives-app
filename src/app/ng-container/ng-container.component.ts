import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "bob", role: "admin", lastLogin: new Date('2/1/2018')},
    { login: "john", role: "admin", lastLogin: new Date('2/12/2018')},
    { login: "karl", role: "user", lastLogin: new Date('2/10/2018')},
    { login: "carl", role: "admin", lastLogin: new Date('2/11/2018')},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
