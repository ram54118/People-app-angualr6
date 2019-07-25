import { Injectable } from '@angular/core';
import { People } from '../models/people.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ServerProxyService } from './server-proxy.service';
const PEOPLELIST = 'people-list';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private poepleListSub = new BehaviorSubject<People[]>([]);
  public peopleListObs = this.poepleListSub.asObservable();
  private peopleList: People[];
  constructor(private serverProxyService: ServerProxyService) { }

  public initPeopleList() {
    if (!this.peopleList) {
      if (!window.navigator.onLine) {
        const peopleList = localStorage.getItem(PEOPLELIST);
        return peopleList ? this.poepleListSub.next(JSON.parse(peopleList)) : this.poepleListSub.next([]);
      }
      this.serverProxyService.get('people/').subscribe((response) => {
        this.peopleList = response.results;
        this.poepleListSub.next(response.results);
      });
    } else {
      this.poepleListSub.next(this.peopleList)
    }
  }

  public filterPeople(filterStr: string) {
    if (filterStr) {
      const filteredList = this.peopleList.filter((people) => people.name.toLowerCase().indexOf(filterStr) !== -1);
      this.poepleListSub.next(filteredList);
    } else {
      this.poepleListSub.next(this.peopleList);
    }
  }

  public getplanetDetails(id: number): Observable<People> {
    return this.serverProxyService.get(`planets/${id}/`);
  }

  public getPlanetUrl(url: string): string {
    const strSplitter = url.indexOf('planets');
    return url.substring(strSplitter - 1);
  }

  public loadPeopleListToStorage() {
    localStorage.setItem(PEOPLELIST, JSON.stringify(this.peopleList));
  }

  public getPeopleList() {
    return this.peopleListObs;
  }
}
