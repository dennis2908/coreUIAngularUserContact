import { Component, OnInit,TemplateRef  } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: 'contactcreateforms.component.html',
   styles: ['contactcreateforms.component.css']
})
export class ContactCreateFormComponent implements OnInit {
  modalRef: BsModalRef;
  
  attemptSubmit
  
  regUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';	
  
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder,private modalService: BsModalService) { 
  
  
  }
  

  ngOnInit(): void { 
   this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
	  age: ['', [Validators.required, Validators.min(10), Validators.max(99)]],
	  photo: ['', [Validators.required, Validators.pattern(this.regUrl)]],
	  
    },{ updateOn: 'submit' })  
  } 
  
  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(template: TemplateRef<any>){
	 this.attemptSubmit = true
	  //this.modalService.show(ModalContentComponent);
	 if(this.userForm.valid){
		var formData = {};
		console.log(this.userForm.controls['firstName'].value) 
		formData['firstName'] = this.userForm.controls['firstName'].value;
		formData['lastName'] = this.userForm.controls['lastName'].value;
		formData['age'] = this.userForm.controls['age'].value;	
        formData['photo'] = this.userForm.controls['photo'].value;		
		fetch("https://simple-contact-crud.herokuapp.com/contact", {
					  method: "post",
					  headers: {
						  'Accept': 'application/json',
						  'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
							}).then(res => res.json())
						  .then(
							(result) => {
								 this.modalRef = this.modalService.show(template);
								
		  });		 
	 }
	 
	 
  }

}
