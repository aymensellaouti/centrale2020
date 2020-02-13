import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-exemple',
  templateUrl: './ng-class-exemple.component.html',
  styleUrls: ['./ng-class-exemple.component.css']
})
export class NgClassExempleComponent implements OnInit {
  isEteinte = false;
  actualClass = 'class1';
  constructor() { }

  ngOnInit() {
  }
  changeClass(newClass) {
    this.actualClass = newClass;
  }
  eteindre() {
    this.isEteinte = !this.isEteinte;
  }
}
