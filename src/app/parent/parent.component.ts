import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent)
  private childdata: ChildComponent;

  increase() {
    this.childdata.increaseByone();
  }
  decrease() {
    this.childdata.decreaseByone();
  }
   ngOnInit() {
     
   }
  
  
}
