import { Injectable } from '@angular/core';
import {Personne} from '../../Models/personne';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  personneClickSubject = new Subject<Personne>();
  constructor(
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37,
        123456, 'teacher',
        'as.jpg'),
      new Personne(2, 'Zidan', 'zineddine',
        37, 123456, 'teacher',
        ''),
      new Personne(3, 'Centrale', 'Angular',
        37, 123456, 'teacher',
        '      '),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }
  deletePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }
  selectPersonne(peronne: Personne) {
    console.log('je vais dispatcher une personne :', peronne);
    this.personneClickSubject.next(peronne);
  }
}
