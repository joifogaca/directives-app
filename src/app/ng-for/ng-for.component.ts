import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = ["Joice", "Felipe", "Ana", "Jonhy"];
  cities = [ {
    name: "São Paulo",
    state: "SP"
  },
  {
    name: "Salvador",
    state: "BA"
  },
  {
    name: "Curitiba",
    state: "PR"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
