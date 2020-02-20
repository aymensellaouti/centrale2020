import { Injectable } from '@angular/core';
import {Personne} from '../../Models/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  emabuchees: Personne[] = [];
  constructor() { }
  /*
  * Récupére la liste des personnes embauchées
  * */
  getEmabuchees() {
    return this.emabuchees;
  }
  /*
  * Embauche une personne en l ajoutant a la liste des emabuachées
  * */
  embaucher(personne: Personne) {
    const index = this.emabuchees.indexOf(personne);
    // '1' == 1 mais '1'!== 1
    if (index === -1) {
      this.emabuchees.push(personne);
    } else {
      alert(`${personne.name} est déjà sélectionné`);
    }
  }
}
