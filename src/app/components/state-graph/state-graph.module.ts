import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateGraphComponent } from './state-graph.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
  	StateGraphComponent
  ],	
  exports: [
  	StateGraphComponent
  	]
})
export class StateGraphModule { }
