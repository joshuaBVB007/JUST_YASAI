import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})

export class PayoutComponent implements OnInit {
  // lista que hemos renderizado en la interfaz
  items_tobeSealed:any;
  suma:number=0;

  constructor(private service:RestService) { }
  
  ngOnInit(): void {
    this.service.getClientPurchaseDataObservable().subscribe((value:any) => {
      this.items_tobeSealed=value['items'];
      this.suma=value.prize;
    })
  }

  removeFromCartByClient(index:number,prize:number){
    this.service.removeProductFromCart(index,prize);
  }

}
