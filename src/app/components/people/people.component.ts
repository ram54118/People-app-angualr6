import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public title: string;
  public peopleList$: Observable<People[]>;
  public selectedPlanet: People;
  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit() {
    this.title = 'PEOPLE';
    this.peopleService.initPeopleList();
    this.peopleList$ = this.peopleService.getPeopleList();
  }

  public filterPeople(filterStr: string) {
    this.peopleService.filterPeople(filterStr);
  }

  public selectPeople(people: People) {
    if (people) {
      this.selectedPlanet = people;
    }
  }

  public redirectToPlanet() {
    if (window.navigator.onLine) {
      this.router.navigate([this.peopleService.getPlanetUrl(this.selectedPlanet.homeworld)]);
    }
  }

  public enableOfflineView() {
    this.peopleService.loadPeopleListToStorage();
  }
}
