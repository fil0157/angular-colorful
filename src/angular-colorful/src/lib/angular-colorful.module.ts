// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { HueComponent } from './components/common/hue/hue.component';
import { AlphaComponent } from './components/common/alpha/alpha.component';
import { SaturationComponent } from './components/common/saturation/saturation.component';
import { InteractiveComponent } from './components/common/interactive/interactive.component';
import { ColorPickerComponent } from './components/common/color-picker/color-picker.component';
import { RgbColorPickerComponent } from './components/rgb-color-picker/rgb-color-picker.component';
import { HslColorPickerComponent } from './components/hsl-color-picker/hsl-color-picker.component';
import { RgbaColorPickerComponent } from './components/rgba-color-picker/rgba-color-picker.component';
import { HslaColorPickerComponent } from './components/hsla-color-picker/hsla-color-picker.component';
import { AlphaColorPickerComponent } from './components/common/alpha-color-picker/alpha-color-picker.component';
import { RgbStringColorPickerComponent } from './components/rgb-string-color-picker/rgb-string-color-picker.component';
import { HslStringColorPickerComponent } from './components/hsl-string-color-picker/hsl-string-color-picker.component';
import { RgbaStringColorPickerComponent } from './components/rgba-string-color-picker/rgba-string-color-picker.component';
import { HslaStringColorPickerComponent } from './components/hsla-string-color-picker/hsla-string-color-picker.component';



@NgModule({
  declarations: [
    HueComponent,
    AlphaComponent,
    SaturationComponent,
    ColorPickerComponent,
    InteractiveComponent,
    RgbColorPickerComponent,
    HslColorPickerComponent,
    RgbaColorPickerComponent,
    HslaColorPickerComponent,
    AlphaColorPickerComponent,
    RgbStringColorPickerComponent,
    HslStringColorPickerComponent,
    RgbaStringColorPickerComponent,
    HslaStringColorPickerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RgbColorPickerComponent,
    HslColorPickerComponent,
    RgbaColorPickerComponent,
    HslaColorPickerComponent,
    RgbStringColorPickerComponent,
    HslStringColorPickerComponent,
    RgbaStringColorPickerComponent,
    HslaStringColorPickerComponent,
  ]
})
export class AngularColorfulModule { }
