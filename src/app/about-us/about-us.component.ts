import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  tags=[
    {
      nombre:"Rice power",
      img:"../../assets/colored_images/cereal.png",
      desc:`Rice is a source of protein and contains various vitamins,
      such as thiamin and niacin, and minerals, such as zinc and phosphorus.
      Some nutrients, including vitamin E, magnesium, potassium, and manganese,etc`
    },
    {
      nombre:"Harvest Time",
      img:"../../assets/colored_images/vegetables.png",
      desc:`Rice is a source of protein and contains various vitamins,
      such as thiamin and niacin, and minerals, such as zinc and phosphorus.
      Some nutrients, including vitamin E, magnesium, potassium, and manganese,etc`
    },
    {
      nombre:"None",
      img:"../../assets/colored_images/combine-harvester.png",
      desc:`Rice is a source of protein and contains various vitamins,
      such as thiamin and niacin, and minerals, such as zinc and phosphorus.
      Some nutrients, including vitamin E, magnesium, potassium, and manganese,etc`
    }
  ]
  constructor() { }
  ngOnInit(): void {}
}


