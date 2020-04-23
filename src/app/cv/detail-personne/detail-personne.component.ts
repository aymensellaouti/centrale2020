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
        this.cvService.getPersonneById(parametre.id).subscribe(
          (personne) => this.personne = personne,
          (error) => this.router.navigate(['cv'])
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (qps) => console.log(qps)
    );
  }

  delete() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['cv']);
      },
      (erreur) => console.log(erreur)
    );
  }
}
