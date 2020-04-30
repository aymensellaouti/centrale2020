import { Injectable } from '@angular/core';
import {Personne} from '../../Models/personne';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import APIS from '../../Globals';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  personneClickSubject = new Subject<Personne>();
  constructor(
    private http: HttpClient
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
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(APIS.apiPersonne);
  }
  getFakePersonneById(id): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(APIS.apiPersonne + id);
  }
  deleteFakePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }
  deletePersonne(id) {
    // const token = localStorage.getItem('token');
    // // const params = new HttpParams().set('access_token', token);
    // const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete<any>(APIS.apiPersonne + id);
  }
  selectPersonne(peronne: Personne) {
    console.log('je vais dispatcher une personne :', peronne);
    this.personneClickSubject.next(peronne);
  }
  addPersonne(personne: Personne) {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(APIS.apiPersonne, personne);
  }
}
