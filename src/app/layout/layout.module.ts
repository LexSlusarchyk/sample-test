import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonSpinnerComponent } from './components/common-spinner/common-spinner.component';

export const COMPONENTS = [
  MainWrapperComponent,
  HeaderComponent,
  CommonSpinnerComponent
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: []
})
export class LayoutModule {}
