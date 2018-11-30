import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from '../modal-basic/modal-basic.component';

// declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-current-opening',
  templateUrl: './current-opening.component.html',
  styleUrls: ['./current-opening.component.css']
})
export class CurrentOpeningComponent implements OnInit { 
  currentopening

  constructor(private config:ConfigService , private modalService:NgbModal) { }
  open(event) {    
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.data;
    var value = idAttr.nodeValue;
   // var position = $(this).attr("idAttr");
    console.log(value);
    //var position = $('<textarea />').html(value).text();
  
    const modalRef = this.modalService.open(ModalBasicComponent);
    $('#position_applied').val(value);
    $('#position_applied').attr("readonly", "readonly");
  
   // modalRef.componentInstance.title = 'About';
  }

  ngOnInit() {
  this.currentopening = this.getcurrentopenings();

  }
  getcurrentopenings(){
    return this.config.getConfig().currentopening;
  }

}
