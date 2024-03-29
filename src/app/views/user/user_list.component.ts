import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder, Validators,FormGroupDirective } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  templateUrl: 'user_list.component.html'
})
export class UserListComponent {
	
   curPage = 1;	
   
   idDel = 1;
   
   modalDataTitle = ""
   
   initialValues = []
   
   nextPageBtn = true
   
   showModalAdd = false
   
   modalBtn = ""
   
   begPage = 1;
   
   perPage = 5;   
   
   maxPage = 0
   
   perPagination = 5;
   no = 1;
   data = [];
   
   dataLi=[];
   
   numbers:Array<any> = [];
   
   formData:Array<any> =  [
	  {username : ""},
	  {password : ""},
	  {name : ""},
	  {id : ""}
	];
   
   modalRef: BsModalRef;
  
   attemptSubmit
   
   spinnerHideShow = "display:block"
  
   regUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';	
  
   userForm: FormGroup
   formDirective: FormGroupDirective
   constructor(public formBuilder: FormBuilder,private modalService: BsModalService) {
	   this.numbers = Array.from({length:this.perPage},(v,k)=>k+1);
	   this.MyfetchData(1);	
   }
   
   openModalConfirm(id,template: TemplateRef<any>) {
	    this.idDel = id;
		this.modalRef = this.modalService.show(template);
   }

   openModalAdd(template: TemplateRef<any>) {
	  this.modalRef = this.modalService.show(template); 
	  this.attemptSubmit = false;
	  this.formData = [
		  {username : ""},
		  {password : ""},
		  {name : ""},
		  {id : ""}
	  ]; 
	  this.initForm();
	  Object.keys(this.userForm.controls).forEach(key => {
			this.userForm.get(key).setErrors(null) ;
	  });
	  
	  this.modalDataTitle = "Add Data User"
	  this.modalBtn = "Create"
      
	  this.showModalAdd = true
	  
   }
   
   openModalEdit(data,template: TemplateRef<any>) {
	  this.showModalAdd = false
	  this.attemptSubmit = false;
	  this.modalDataTitle = "Edit Data User"
	  this.modalBtn = "Update"
      this.modalRef = this.modalService.show(template);
	  this.formData = data;
	  this.initForm();
	  Object.keys(this.userForm.controls).forEach(key => {
			this.userForm.get(key).setErrors(null) ;
	  });

	  
   }

   ngOnInit(): void { 
    this.initForm();
	this.getTemplate();
	
	this.maxPage = (this.perPagination + this.begPage - 1)
	
    
  } 
  
  initForm(){
	  
	  this.userForm = this.formBuilder.group({
	  id: [''],	  
      username: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
	  password: ['', [Validators.required, Validators.minLength(7)]]
	  
    },{ updateOn: 'submit' });
	
  }
   
   get getControl(){
    return this.userForm.controls;
  }
  
   async MyfetchData(page) {   
    this.spinnerHideShow="display:block"
	await fetch("https://sharingvision-backend.herokuapp.com/user/"+this.perPage+'/'+page)
      .then(res => res.json())
      .then(
        (result) => {
		   this.spinnerHideShow="display:block"	
		  let Datalist = []
		  let j=0
		  this.data = result.data;
		  console.log(result.data);
		  if(result.data.length === 0){
			  if(this.curPage !== 1){
				this.curPage -= 1  
				this.maxPage = this.curPage;
				this.nextPageBtn = false;  
				this.spinnerHideShow="display:block"
				this.MyfetchData(this.curPage)
			  }
			  else{
				this.maxPage = 1;
				this.nextPageBtn = false;  
				this.spinnerHideShow="display:block"
			  }
			  
		  }
		  else if(result.data.length < this.perPage){
			  this.maxPage = this.curPage;
			  this.nextPageBtn = false;
		  }
		  this.spinnerHideShow="display:none"
		});	
	
	}
	
	getTemplate(){
	    this.dataLi = [];	
		for(let i=0;i<4;i++){
		  this.dataLi.push('<li class="page-item"><a class="page-link" href="#"><a class="page-link" href="#">'+(i+1)+'</a></li>')	
			
		}
	}
	activePage(pg,event){
		this.spinnerHideShow="display:block"
		this.curPage=pg;
		this.MyfetchData(pg);	
		if(this.curPage !== this.maxPage){
			this.nextPageBtn = true
		}
		
		event.preventDefault();
	}
	
	prevPage(event){
		if(this.curPage !== this.begPage){
			this.activePage(this.curPage-1,event);
		}
		else{
			if(this.begPage!==1){
				this.begPage -= this.perPagination;
				this.maxPage = (this.perPagination + this.begPage - 1)
				this.activePage(this.curPage-1,event);
			}
		}
		this.nextPageBtn = true;
		event.preventDefault();
	}
	
	nextPage(event){
		if(this.curPage !== this.maxPage){
			this.activePage(this.curPage+1,event);
		}
		else{
			this.begPage = this.curPage+1;
			this.maxPage = (this.perPagination + this.begPage - 1)
			this.activePage(this.curPage+1,event);
		}
		
		event.preventDefault();
	}
	
	deleteItem(event){
		this.spinnerHideShow = "display:block"
		event.preventDefault();
		fetch("http://sharingvision-backend.herokuapp.com/user/"+this.idDel, {
						  method: "DELETE",
						  headers: {
							  'Accept': 'application/json',
							  'Content-Type': 'application/json',
							  'Access-Control-Allow-Headers':'*'
							}
								}).then(res => res.json())
							  .then(
								(result) => {
									this.activePage(this.curPage,event)
									this.spinnerHideShow = "display:none"
									this.modalRef.hide()
									
			  });
		
	}
  
  onSubmit(event){
	 if(this.showModalAdd)
		this.attemptSubmit = true
	
	 console.log(this.formData);
	  //this.modalService.show(ModalContentComponent);
	 if(this.userForm.valid){
		var formData = {};
		formData['username'] = this.userForm.controls['username'].value;
		formData['name'] = this.userForm.controls['name'].value;
		formData['password'] = this.userForm.controls['password'].value;
		this.spinnerHideShow = "display:block"
		this.attemptSubmit = false
		if(this.userForm.controls['id'].value){
			fetch("http://sharingvision-backend.herokuapp.com/user/"+this.userForm.controls['id'].value, {
						  method: "PUT",
						  headers: {
							  'Accept': 'application/json',
							  'Content-Type': 'application/json',
							  'Access-Control-Allow-Headers':'*'
							},
							body: JSON.stringify(formData)
								}).then(res => res.json())
							  .then(
								(result) => {
									this.activePage(this.curPage,event)
									this.spinnerHideShow = "display:none"
									
			  });
		}
		else
		{
				
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
									 this.activePage(this.curPage,event) 
									 this.spinnerHideShow = "display:none"
									
			  });
        }		  
	 }
	 
	 
  }

}
