import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit  {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
      ngOnInit() {
        this.registerForm = this.formBuilder.group({
            FullName: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email]],
            CurrentCTC: ['', Validators.required],
            ExpectedCTC: ['', Validators.required],
            Resume: ['', Validators.required],
            policy_check: ['', Validators.required]
        
            
        });
      }
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;    
    
      if (this.registerForm.valid) {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
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
