import { Injectable } from '@angular/core';
import {Personne} from '../../Models/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37,
        123456, 'teacher',
        'as.jpg'),
      new Personne(2, 'sellaouti', 'aymen',
        37, 123456, 'teacher',
        ''),
      new Personne(3, 'sellaouti', 'aymen',
        37, 123456, 'teacher',
        '      '),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
