import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { ServerProxyService } from './server-proxy.service';
import { of } from 'rxjs';
const serverProxyServiceStub = {
  get: () => of({
    results: [{
      name: 'test',
      height: 'test',
      mass: 'test',
      hair_color: 'test',
      skin_color: 'test',
      eye_color: 'test',
      birth_year: 'test',
      gender: 'test',
      homeworld: 'test',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: 'test',
      edited: 'test',
      url: 'test',
      id: 11
    }]
  })
};
fdescribe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService,
        { provide: ServerProxyService, useValue: serverProxyServiceStub }]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch the people list', inject([PeopleService], (service: PeopleService) => {
    service.initPeopleList();
    service.peopleListObs.subscribe((response) => {
      expect(response.length).toBe(1);
      expect(response[0].name).toBe('test');
    });
  }));

  it('should get planet url', inject([PeopleService], (service: PeopleService) => {
    const result = service.getPlanetUrl('https://swapi.co/api/planets/1/');
    expect(result).toBe('/planets/1/');
  }));
});
