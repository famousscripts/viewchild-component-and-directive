import { Component, OnInit, ViewChild } from '@angular/core';
import { CpcolorDirective} from '../cpcolor.directive';

@Component({
  selector: 'app-cpcolor',
  templateUrl: './cpcolor.component.html',
  styleUrls: ['./cpcolor.component.css']
})
export class CpcolorComponent implements OnInit {

   @ViewChild(CpcolorDirective) private cpcolorva : CpcolorDirective;

  constructor() { }

  ngOnInit() {
  }

  changeColor(color: string) {
    
     this.cpcolorva.changeva(color)
  }
  
}
