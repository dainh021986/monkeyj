import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: [
      '../views/dashboard.component.css',
  ]
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  constructor() { }

  ngOnInit() {
  }

}
