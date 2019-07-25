import { People } from './../../models/people.model';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  public planet$: Observable<People>;
  constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const planetId = params['id'];
      if (planetId) {
        this.loadPlanetDetails(+planetId);
      }
    });
  }

  private loadPlanetDetails(id: number) {
    this.planet$ = this.peopleService.getplanetDetails(id);
  }

}
