import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'insecurity',
  templateUrl: './insecurity.component.html',
  providers: [StateService]
})
export class InsecurityComponent implements OnInit {
	 opcionSeleccionado: string  = '0';
  	 verSeleccion: string        = '';

	  constructor( private router: Router,
	   private route:ActivatedRoute,
	  	private stateService: StateService) { 
	  this.states = [];
	}
	states: any []
	

	  ngOnInit() {

	  	this.stateService.getState().subscribe((states:any[])=>{
	  		this.states = states;
	  	})
	  }
	  capturar() {
      this.verSeleccion = this.opcionSeleccionado;
  }

}
