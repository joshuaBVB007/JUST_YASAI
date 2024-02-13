import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  vitamins:boolean=false;
  extra_info_available:boolean=false;
  origin_from:boolean=false;

  VitaText="Vitamins";
  ExtraText="Extra information";
  OriginText="Origin from";

  new_url:any;
  new_name="";

  constructor(private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.new_name=this.route.snapshot.params['nombre'];
    this.new_url=this.route.snapshot.params['url'];
  }

  showVitaminas(){
    this.vitamins ? this.VitaText="Vitamins" : this.VitaText="  Hide";
    this.vitamins=!this.vitamins;
  }
  showinfo_extra(){
    this.extra_info_available ? this.ExtraText="Extra information" : this.ExtraText="Hide"
    this.extra_info_available=!this.extra_info_available;
  }
  showinfo_pais_procedencia(){
    this.origin_from ? this.OriginText="Origin from" : this.OriginText="Hide"
    this.origin_from=!this.origin_from;
  }
  
}
