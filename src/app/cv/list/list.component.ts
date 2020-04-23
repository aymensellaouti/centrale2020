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
  // @Output() selectPersonne = new EventEmitter();
  ngOnInit() {
    /*
    Liste des personnes
     */
     this.cvService.getPersonnes().subscribe(
       (personnes) => this.personnes = personnes,
       (error) => {
         this.personnes = this.cvService.getFakePersonnes();
         alert('Problème de connexion, les données sont Fake');
       }
     );
  }
  // forwardPersonne(personne: Personne) {
  //   this.selectPersonne.emit(personne);
  // }
}
