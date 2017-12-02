import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProblemDataService }  from '../../services/problem-data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problemItem: Problem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private problemDataS: ProblemDataService) { }

  ngOnInit() {
    this.getCorrespondentData()
  }

  getCorrespondentData (){

    this.route.params.subscribe(p =>{

      this.problemDataS.detailPageData(+p.id)
      .subscribe(d => this.problemItem = d)

    })
  }

  goBack(): void{
    this.location.back();
  }

}
