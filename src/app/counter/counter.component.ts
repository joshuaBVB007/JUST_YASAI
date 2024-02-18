import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {
  cantidad:number=0;
  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.service.getClientPurchaseDataObservable().subscribe((value: any) => {
        this.cantidad=value['count'];
    })
  }

}
