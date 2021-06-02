import { Component, OnInit,TemplateRef  } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: 'usercreateforms.component.html'
})
export class UserCreateFormComponent implements OnInit {
  modalRef: BsModalRef;
  
  attemptSubmit
  
  regUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';	
  
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder,private modalService: BsModalService) { 
 
  }
  

  ngOnInit(): void { 
   this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
	  password: ['', [Validators.required, Validators.minLength(7)]]
	  
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
		formData['username'] = this.userForm.controls['username'].value;
		formData['name'] = this.userForm.controls['name'].value;
		formData['password'] = this.userForm.controls['password'].value;		
		fetch("http://sharingvision-backend.herokuapp.com/user", {
					  method: "POST",
					  headers: {
						  'Accept': 'application/json',
						  'Content-Type': 'application/json',
						  'Access-Control-Allow-Headers':'*'
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
