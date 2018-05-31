import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'state-graph',
  templateUrl: './state-graph.component.html',
  providers: [StatisticsService]
})
export class StateGraphComponent {

  constructor(private router: Router, private route: ActivatedRoute,
        private statisticsService:StatisticsService) { 
  		  this.statistics = [];
      }
      statistics: any[]
      ngOnInit() {
        this.statisticsService.getStatistics().subscribe((statistics:any[])=>{
        this.statistics = statistics;
      });
      }

      public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels:string[] = ['Escuela', 'Automovil', 'Cajero', 'Calles', 'Banco'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
     
      public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56], label: 'Tipos de Delincuencia'},
        
      ];
 
  
}