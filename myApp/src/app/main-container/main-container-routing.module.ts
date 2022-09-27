import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableListComponent } from './observable/observable-list/observable-list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OforfromComponent } from './observable/oforfrom/oforfrom.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { TapComponent } from './observable/tap/tap.component';

const childRoutes: Routes = [
  {path:'main',
  title:'Main Container',
   component:MainContainerComponent,
   children:[
    {path:'promise', title:'Promise Topic',component:PromiseComponent},
    {path:'observable',title:'observable Topic', component:ObservableComponent,
      children:[
        {path:'',component:ObservableListComponent},
        {path:'fromEvent',component:FromEventComponent},
        {path:'interval',component:IntervalComponent},
        {path:'oforfrom', component:OforfromComponent},
        {path:'toarray', component:ToarrayComponent},
        {path:'custom', component:CustomComponent},
        {path:'mapping', component:MapComponent},
        {path:'tap', component:TapComponent}
      ]
    }
   ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule { }
export const mainContainerComponents =[
  MainContainerComponent,
  PromiseComponent,
  ObservableComponent,
  ObservableListComponent,
  FromEventComponent,
  IntervalComponent,
  OforfromComponent,
  ToarrayComponent,
  CustomComponent,
  MapComponent,
  TapComponent
]
