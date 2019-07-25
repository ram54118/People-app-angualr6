import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public showBackBtn: boolean;
  @Input() public showOfflineBtn: boolean;
  @Output() public enableOfflineView = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {

  }
  public goBack() {
    this.router.navigate(['/people']);
  }

  public enableOffline() {
    this.enableOfflineView.emit(true);
  }
}
