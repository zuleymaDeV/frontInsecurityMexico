import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsecurityComponent } from './insecurity.component';
import { RouterModule } from '@angular/router';
import { TypesInsecurityComponent } from '../types-insecurity/types-insecurity.component';
import { TypesInsecurityModule } from '../types-insecurity/types-insecurity.module';
import { StateGraphComponent } from '../state-graph/state-graph.component';
import { StateGraphModule } from '../state-graph/state-graph.module';


export const routes = [{
	path: '', component: InsecurityComponent
},{
	path: '', component: TypesInsecurityComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TypesInsecurityModule,
    StateGraphModule
  ],
  declarations: [
  InsecurityComponent
  ],
  exports: [
  InsecurityComponent
  ]
})
export class InsecurityModule { 
	static routes = routes;
	}
