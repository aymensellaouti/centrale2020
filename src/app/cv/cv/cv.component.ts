import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
  }

  onSelectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
