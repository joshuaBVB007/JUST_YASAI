import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  profileForm=new FormGroup({
    name:new FormControl('',Validators.required),
    mail:new FormControl('',Validators.required),
    knowus:new FormControl('',Validators.required),  
  })

  constructor() { }
  ngOnInit(): void {
  }

  SendToServer(){
      /* How does this popup work? we use display block because everytime 
      we use fadeOut the Html element is put as "display:none" which means it disappear from
      DOM's structure,so.we need to put display block to get it back to the DOM
      */
  }

}
