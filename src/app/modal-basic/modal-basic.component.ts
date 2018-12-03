import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase';
// import * from 'firebase'


@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit  {
  registerForm: FormGroup;
  submitted = false;
  item: string;
  Phone: string;
  FullName;
  Email;
  exp;
  Noticeperiod;
  Resume;
  position;
  itemValue = '';
  ref;

  items: Observable<any[]>;

  constructor(private formBuilder: FormBuilder , public db: AngularFireDatabase , private storage: AngularFireStorage) { 
    this.items = db.list('items').valueChanges();
  }
      ngOnInit() {
        this.registerForm = this.formBuilder.group({
            FullName: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email]],
            CurrentCTC: ['', Validators.required],
            ExpectedCTC: ['', Validators.required],
            Resume: ['', Validators.required],
            policy_check: ['', Validators.required],         
            Phone: ['', Validators.required],
            exp:[''],         
            Noticeperiod:[''],    
            position:['']  
        
        });
 

      }
    get f() { return this.registerForm.controls; }

    selectChangeHandler (event: any) {
      
      this.exp = event.target.value;
   
      console.log(this.exp);
    
    }
    selectChange(event) {
            //update the ui
 
    this.Noticeperiod = event.target.value;
       console.log(this.Noticeperiod);
    }
    upload(event1) {
      // create a random id
      const randomId = Math.random().toString(36).substring(2);
      // create a reference to the storage bucket location
      this.ref = this.storage.ref(randomId);
      // the put method creates an AngularFireUploadTask
      // and kicks off the upload
      this.Resume = this.ref.put(event1.target.files[0]);
      console.log(this.Resume);
    }
    onSubmit() {      
      this.submitted = true;    
         if (this.registerForm.valid) {
        console.log(this.registerForm.getRawValue())   ;
        this.db.list('/items').push({ content:this.registerForm.value });       
        // this.itemValue = '';
        alert('SUCCESS!! :-)');
        this.registerForm.reset();
      } else {
        
      }




        // this.submitted = true;    

        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }
        // console.log("lkl;");
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
  // closeResult: string;

  // constructor(private modalService: NgbModal) {}

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}
