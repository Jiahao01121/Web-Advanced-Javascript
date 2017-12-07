import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { Problem } from '../../models/problem.model';
import { ProblemDataService } from '../../services/problem-data.service'


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit, OnDestroy {

  problems: Problem[];
  subscriptionProblems: Subscription;
  constructor( private problemDataService: ProblemDataService) { }

  ngOnInit() {
    this.getProblems();
  }

  ngOnDestroy() {
    this.subscriptionProblems.unsubscribe();
  }

  getProblems(): void{
    // this.problems = this.problemDataService.getData();
    this.subscriptionProblems = this.problemDataService.getData()
        .subscribe( problems => { this.problems = problems })
  }
}
