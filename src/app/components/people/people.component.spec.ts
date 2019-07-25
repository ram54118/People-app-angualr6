import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { RouterModule, Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  const peopleServiceStub = {
    initPeopleList: () => { },
    getPeopleList: () => of([]),
    getPlanetId: () => 22,
    loadPeopleListToStorage: () => { },
    filterPeople: () => { }
  };

  const routerStub = {
    navigate: () => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [PeopleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: PeopleService, useValue: peopleServiceStub },
        { provide: Router, useValue: routerStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init the people list', () => {
    const peopleService = TestBed.get(PeopleService);
    const initListSpy = spyOn(peopleService, 'initPeopleList');
    const peopleListSpy = spyOn(peopleService, 'getPeopleList');
    component.ngOnInit();
    expect(component.title).toBe('PEOPLE');
    expect(initListSpy).toHaveBeenCalled();
    expect(peopleListSpy).toHaveBeenCalled();
  });

  it('should filter people', () => {
    const peopleService = TestBed.get(PeopleService);
    const spy = spyOn(peopleService, 'filterPeople');
    component.filterPeople('a');
    expect(spy).toHaveBeenCalledWith('a');
  });
});
