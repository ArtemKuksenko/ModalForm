import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent {

	@Input() Form;
	isOpened=true;
	@Output() onChanged = new EventEmitter<boolean>();
	onClick(){
		this.isOpened=false;
		this.onChanged.emit(false);		
	}
}
	