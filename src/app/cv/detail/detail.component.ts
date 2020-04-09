import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Models/personne';
import {EmbaucheService} from '../services/embauche.service';
import {Router} from '@angular/router';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.personneClickSubject.subscribe(
      (personne) => {
        console.log('l observable a emis une nouvelle personne je l affiche', personne);
        this.personne = personne;
      }
    );
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
  detail() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
