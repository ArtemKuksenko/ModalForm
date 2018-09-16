import { Component } from '@angular/core';

import { Form } from './modal-window/form';//ADD
import {Validators } from '@angular/forms';//ADD


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	formEx:Form = new Form("Hello");
	constructor(){
	    this.formEx.add("email","input","введите email","мыло не ронять!","",[Validators.minLength(3),Validators.maxLength(30)]);
	    this.formEx.add("phone","input","введите трубу","есть позвонить?","+7",[]);
	    this.formEx.add("pssw","password","Я сказал пароль?!","pin_card_ples","",[]);
	    this.formEx.add("check","checkbox","А ты согласен?!","","",[]);
    }
}
