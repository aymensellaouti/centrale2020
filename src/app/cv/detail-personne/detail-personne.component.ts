import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Models/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametre) => {
        const personne = this.cvService.getPersonneById(parametre.id);
        if (personne) {
          this.personne = personne;
        } else {
          this.router.navigate(['cv']);
        }
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (qps) => console.log(qps)
    );
  }

  delete() {
    if (this.cvService.deletePersonne(this.personne)) {
      this.router.navigate(['cv']);
    } else {
      alert('Problème supression');
    }
  }
}
