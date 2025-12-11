import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [RouterModule,CounterComponent,CommonModule],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
