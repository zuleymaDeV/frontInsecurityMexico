import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { StateService } from '../../services/state.service';
import { DelinquencyService } from '../../services/delinquency.service';

@Component({
  selector: 'types-insecurity',
  templateUrl: './types-insecurity.component.html',
  providers: [StatisticsService,
      StateService,
      DelinquencyService]
})
export class TypesInsecurityComponent{

  constructor( private router: Router, private route: ActivatedRoute,
  				private statistcsService:StatisticsService,
          private stateService: StateService,
          private delinquencyService: DelinquencyService) {
          this.states = [];
          this.statistics = [];
          this.delinquencys =[];
           }

  statistics: any[]
  states: any []
  delinquencys: any []

  ngOnInit() {
  	this.statistcsService.getStatistics().subscribe((statistics:any[])=>{
        this.statistics = statistics;
      });
    this.stateService.getState().subscribe((states:any[])=>{
        this.states = states;
      });
    this.delinquencyService.getDelinquency().subscribe((delinquencys:any[])=>{
        this.delinquencys = delinquencys;
      });
  }

}


