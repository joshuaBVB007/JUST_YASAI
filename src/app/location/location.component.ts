import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl:  './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
}
