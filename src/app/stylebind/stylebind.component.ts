import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { OutletContext } from '@angular/router';
import { personalDetail } from '../models/personalDetails.model';


@Component({
  selector: 'app-stylebind',
  templateUrl: './stylebind.component.html',
  styleUrls: ['./stylebind.component.css']
})
export class StylebindComponent implements OnInit {

  color: string = "";
  clist: string[] = ["red", "blue", "green"];
  outputData: personalDetail={firstName:"",lastName:"",guthubId:"",linkedId:""};
  @Input() comingdata;
  @Output() outgoingdata: EventEmitter<personalDetail> = new EventEmitter<personalDetail>();

  constructor() { }

  ngOnInit(): void {
    this.outputData.firstName = this.comingdata.key1;
    this.outputData.lastName = this.comingdata.key2;
    this.outputData.guthubId = this.comingdata.key3;
    this.outputData.linkedId = this.comingdata.key4;
  }

  whentrue() {
    if (this.color == "true") {
      return true;
    }
  }

  whenfalse() {
    if (this.color == "false") {
      return "im gone";
    }
  }

  onclick() {
    this.outgoingdata.emit(this.outputData);
  }


}

