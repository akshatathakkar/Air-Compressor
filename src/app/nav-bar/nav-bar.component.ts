import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INavBar } from '../models/nav-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Input() navbarList: INavBar[] = [];
  @Output() pathEmitter = new EventEmitter();

  ngOnInit(): void {
  }

  onNavigateClick(path: string) {
    this.pathEmitter.emit(path);
  }

}
