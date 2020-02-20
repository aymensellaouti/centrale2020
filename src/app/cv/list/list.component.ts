import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Models/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor(
    private cvService: CvService
  ) { }
  @Output() selectPersonne = new EventEmitter();
  ngOnInit() {
    /*
    Liste des personnes
     */
    this.personnes = this.cvService.getPersonnes();
  }
  forwardPersonne(personne: Personne) {
    this.selectPersonne.emit(personne);
  }
}
