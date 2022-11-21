import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }
  data:any;
  label:any;
datasets:any=[];
labels:any=[];
page:any;

backgroundColor:any=[];
  ngOnInit(): void {
 this.page= new PageComponent;
 this.page.portfolio();
 this.page.doughnut();
 this.page.chart();
  }
  portfolio() {
    this.datasets = [
      {
        label: 'Days',
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
      },
    ];
  
    this.labels = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  }

  doughnut(){
    this.label= 'Traffic',
      this.data =[100, 100, 160],
      this.backgroundColor =[
        'rgba(63, 81, 181, 0.5)',
        'rgba(77, 182, 172, 0.5)',
        'rgba(66, 133, 244, 0.5)'
      ]
  }

  chart(){
    this.datasets = [
      {
        label: 'Traffic',
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
      },
    ]
  }

}
