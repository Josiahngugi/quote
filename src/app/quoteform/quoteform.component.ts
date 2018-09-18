import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quoteclass} from '../quoteclass';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
@Input () parentout:Quoteclass;
@Output () childout= new EventEmitter<Quoteclass>();
newitem=new Quoteclass(1,"","","",new Date())

addnewitem(){
  this.childout.emit(this.newitem)
  this.newitem=new Quoteclass(1,"","","",new Date())
}
  constructor() { }

  ngOnInit() {
  }

}
