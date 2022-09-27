import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainContainerRoutingModule, mainContainerComponents } from './main-container-routing.module';






@NgModule({
  declarations: [
    mainContainerComponents,
   
   
    

 
  ],
  imports: [
    CommonModule,
    MainContainerRoutingModule
  ], 
  exports:[
    CommonModule,
    MainContainerRoutingModule,
    RouterModule
  ]
})
export class MainContainerModule { }
