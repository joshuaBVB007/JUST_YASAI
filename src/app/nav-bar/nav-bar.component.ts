import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private service:RestService) {}
  ngOnInit(): void {
  }
}
