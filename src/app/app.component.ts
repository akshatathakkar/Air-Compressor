import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarMock } from './mocks/nav-mock';
import { INavBar } from './models/nav-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navList: INavBar[] = [];
  title = 'air-compressor';
  card: any;

  constructor(private router: Router) {
    this.createNavBarList();
  }

  createNavBarList() {
    this.navList = NavBarMock;
  }

  onNavigateClick(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }
}
