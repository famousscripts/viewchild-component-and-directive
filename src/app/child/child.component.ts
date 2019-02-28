import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent  {

   message: string = '';
   counter: number = 0;

   increaseByone() {
     this.counter = this.counter+1;
     this.message = "Couter would be " + this.counter; 
   }
   decreaseByone() {
     this.counter = this.counter-1;
     this.message = "Counter decrease "+this.counter;
   }

}
