import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model'
import { ProblemDataService } from '../../services/problem-data.service'
import { Location } from '@angular/common';

const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
});


@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})

export class NewProblemComponent implements OnInit {
  constructor (
    private problemDataS: ProblemDataService,
    private location: Location
  ) { }
  newProblem: Problem = Object.assign({},DEFAULT_PROBLEM);
  addProblem(): void{

    // this.newProblem.id = this.problemDataS.getData().length + 1;
    this.newProblem.difficulty = "easy";
    this.problemDataS.addData(this.newProblem)
    this.newProblem = Object.assign({},DEFAULT_PROBLEM)
  }
  goBack(): void{
    this.location.back();

  }

  ngOnInit() {
  }

}
