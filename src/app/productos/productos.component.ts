import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AmazonServiceService } from '../amazon-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-productos',
  standalone:true,
  imports:[NavBarComponent,CommonModule,RouterModule,FormsModule,ToolBarComponent,SearchPipe],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})

export class ProductosComponent implements OnInit{

  //utilizado en el diseños de las frutitas de la izquierda
  btn_disenio="";
  //Propiedad utilizada en el filtro del buscador
  dato:string="";

  frutas:object[]=[
    {nombre:"Açaí",imagen:"../../assets/Frutas/açai.jpeg",precio:2.5,tieneDescuento:true},
    {nombre:"Banana",imagen:"../../assets/Frutas/banana.jpeg",precio:2.5,tieneDescuento:false},
    {nombre:"Strawberry",imagen:"../../assets/Frutas/cereza.jpeg",precio:2.5,tieneDescuento:true},
    {nombre:"Green apple",imagen:"../../assets/Frutas/mverde.jpeg",precio:2.5,tieneDescuento:false},
    {nombre:"Pineapple",imagen:"../../assets/Frutas/piña.jpeg",precio:2.5,tieneDescuento:true},
    {nombre:"Grapes",imagen:"../../assets/Frutas/uvas.jpeg",precio:2.5,tieneDescuento:false},
  ];

  constructor(private service:RestService,private amazon:AmazonServiceService){} 

  ngOnInit(): void {
    //this.amazon.doGetRequestToAmazon().subscribe(data => console.log(data));
    this.service.getString().subscribe((value: string) => {
          switch (value) {
            case "fresa":
              this.btn_disenio="btn_strawberry_color"
              break;
            case "manzana":
              this.btn_disenio="btn_apple_color"
              break;
            case "uvas":
              this.btn_disenio="btn_grape_color"
              break;
            default:
              this.btn_disenio="btn_strawberry_color"
              break;
          }
    });
  }
  
  setButtonColor(color:string){
    this.service.setString(color);
  }

  Add(productName:string,productPrize:number,imagenName:string){
    this.service.addProductToCart(productName,productPrize,imagenName);
  }
    
}


