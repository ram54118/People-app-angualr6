import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../models/loader.model';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();
  constructor() { }
  public show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }
  public hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }

}
