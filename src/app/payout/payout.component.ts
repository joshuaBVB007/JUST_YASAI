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
  @ViewChild("sourcetag") myNameElem: ElementRef | undefined;
  @ViewChild("sourcetag2") myNameElem2: ElementRef | undefined;

  constructor(private service:RestService) { }
  
  ngOnInit(): void {
    this.service.getClientPurchaseDataObservable().subscribe((value:any) => {
      this.items_tobeSealed=value['items'];
      this.suma=value.prize;
    })
  }

  rejectPurchase(){
    setTimeout(()=>{
      this.service.removeAllProducts();
    },1000)
    this.makePurchaseReject();
  }

  buyProducts(){
    setTimeout(()=>{
      this.service.removeAllProducts();
    },1000)
    this.makePurchaseSound();
  }

  makePurchaseSound(){
    let sound=this.myNameElem?.nativeElement;
    sound.play();
  }

  makePurchaseReject(){
    let sound2=this.myNameElem2?.nativeElement;
    sound2.play();
  }

  removeFromCartByClient(index:number,prize:number){
    this.service.removeProductFromCart(index,prize);
  }

  removeAllProductsFromCart(){
    this.service.removeAllProducts();
  }

}
