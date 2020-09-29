// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { HueComponent } from './components/common/hue/hue.component';
import { AlphaComponent } from './components/common/alpha/alpha.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InteractiveComponent } from './components/common/interactive/interactive.component';



@NgModule({
  declarations: [
    HueComponent,
    AlphaComponent,
    ColorPickerComponent,
    InteractiveComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorPickerComponent,
  ]
})
export class AngularColorfulModule { }
