import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model'
import { ProblemDataService } from '../../services/problem-data.service'


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor( private problemDataService: ProblemDataService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void{
    this.problems = this.problemDataService.getData();
  }
}
