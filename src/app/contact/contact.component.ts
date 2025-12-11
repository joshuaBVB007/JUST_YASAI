import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import $  from 'jquery';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [NavBarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  profileForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(2)]),
    mail:new FormControl('',[Validators.required,Validators.email]),
    knowus:new FormControl('',Validators.required),  
  })

  constructor() { }
  ngOnInit(): void {}

  SendToServer(){
    $( ".popUp" ).css("display","block");
    $( ".popUp" ).fadeOut(2000,()=>{})
  }

}
