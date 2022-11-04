import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SharedComponentsRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule
  ],
  exports: [LoaderComponent]
})
export class SharedComponantsModule { }
