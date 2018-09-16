import { FormGroup, FormBuilder, FormControl,FormArray,FormArrayName,Validators,ValidatorFn } from '@angular/forms';

export class Form{
   
   title:string;
   description="дефолтное описание";
   constructor(title="Заголовок"){
		this.title=title;   	
   }
   
   SetDescription(t: string){
   		this.description=t;
   }


   FormForModal = new FormGroup({
    });
    n=[];
    pl=[];
    t=[];
    k=[];
    type=[];
    // height=250;
    height:object;
    h=250;
    w=300;

    setWidth(k:number){
    	this.w=k;
    	this.height={
	    	'height':this.h.toString()+"px",
	    	'width':this.w.toString()+"px"
	    };
    }

    add(name,type,t,pl,fil: string,valid :Array<ValidatorFn>){
    	this.FormForModal.addControl(
    		name, new FormControl(fil))
    	this.n.push(name);
    	this.pl.push(pl);
    	this.type.push(type);
    	this.t.push(t);
    	this.k[this.k.length]=this.k.length;
    	this.FormForModal.controls[name].setValidators(valid);
    	this.h=this.h+110;
	    this.height={
	    	'height':this.h.toString()+"px",
	    	'width':this.w.toString()+"px"
	    };
	}
  onChanged(F: FormGroup){
    console.log('закрыли окно');
    console.log(F.value);
  }
}
