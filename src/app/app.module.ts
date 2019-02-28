import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent} from './parent/parent.component';
import { ChildComponent} from './child/child.component';
import { CpcolorDirective } from './cpcolor.directive';
import { CpcolorComponent } from './cpcolor/cpcolor.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentComponent, ChildComponent, CpcolorDirective, CpcolorComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
