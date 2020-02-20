import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Models/personne';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  dateDuJour = new Date();
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit() {
    this.loggerService.logger('CC je suis le cvComponent');
  }

  onSelectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
