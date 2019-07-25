import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') input: ElementRef;
  @Output() triggerSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    fromEvent<any>(this.input.nativeElement, 'keyup').pipe(map(event => event.target.value), debounceTime(100), distinctUntilChanged()).subscribe((value) => {
      this.triggerSearch.emit(value.toLowerCase());
    });
  }
}
