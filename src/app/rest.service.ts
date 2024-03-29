import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  product_items:object[]=[];
  precioReducido=0;
  private ClientData={count:0,prize:0,items:this.product_items,imagen:""}
  private stringSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private ClientPurchaseData: BehaviorSubject<object> = new BehaviorSubject<object>(this.ClientData);

  constructor() {}

  getClientPurchaseDataObservable(){
    return this.ClientPurchaseData.asObservable();
  }
  setClientPurchaseData(){
    this.ClientPurchaseData.next({count:0,name:"",items:[]})
  }
  addProductToCart(productName:string,productPrize:number,imagenName:string){
    this.ClientData.items.push({productName,productPrize,imagenName});
    this.ClientData.count=this.ClientData.items.length;
    this.ClientData.prize=this.ClientData.prize+productPrize;
    this.ClientPurchaseData.next(this.ClientData)
  }

  removeProductFromCart(indexToDelete:number,productPrize:number){
    this.ClientData.items.splice(indexToDelete, 1);
    this.ClientData.count=this.ClientData.items.length;
    this.precioReducido=this.ClientData.prize-productPrize;
    this.ClientData.prize=this.precioReducido;
    this.ClientPurchaseData.next(this.ClientData);
  }

  removeAllProducts(){
    this.ClientData={count:0,prize:0,items:[],imagen:""};
    this.ClientPurchaseData.next(this.ClientData);
  }

  getString() {
    return this.stringSubject.asObservable();
  }
  setString(newValue: string) {
    this.stringSubject.next(newValue);
  }
}
