import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Models/personne';
import {LoggerService} from '../../services/logger.service';
import {Router} from '@angular/router';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  dateDuJour = new Date();
  message = '';
  nbreDeClick = 0;
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService,
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.loggerService.logger('CC je suis le cvComponent');
    this.cvService.personneClickSubject.subscribe(
      (personne) => {
        this.nbreDeClick ++;
        this.message = `Tu as clické sur ${personne.name}`;
      }
    );
  }

  onSelectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
  goToTodo() {
    this.router.navigate(['todo']);
  }
}
