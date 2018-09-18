import { Component } from '@angular/core';
import {Quoteclass} from './quoteclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-Board';
  items=[
    new Quoteclass(1,"Lost love!","If you stay with a beautiful lady without proposing and assuming of the best friendship, you will end up fetching water at her wedding","Anonymous",new Date()),
    new Quoteclass(1,"A man who kills !","the soo dangerous part a man can do is to kill himself soul and zeal, because it would mean has no hope hance well as dead!","Admin",new Date())
  ]
  additem(newitem){
    this.items.push(newitem)
  }
increment(index){
  this.items[index].count++;
}
 decrement(index){
   this.items[index].count--;
 }
 delete(index){
   this.items.splice(index,1)
 }
}
