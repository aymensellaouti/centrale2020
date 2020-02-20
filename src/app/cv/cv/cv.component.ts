import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Models/personne';
import {LoggerService} from '../../services/logger.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  dateDuJour = new Date();
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggerService.logger('CC je suis le cvComponent');
  }

  onSelectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
  goToTodo() {
    this.router.navigate(['todo']);
  }
}
