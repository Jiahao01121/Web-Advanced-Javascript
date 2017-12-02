import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../models/mockdata';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProblemDataService {

  getData(): Problem[]{
    return PROBLEMS;
  };

  detailPageData(num: number): Observable<Problem> {
      return of(
        PROBLEMS.find(d =>{return  d.id == num})
      )
  }

  addData(data: Problem):void {
    PROBLEMS.push(data);
  }
  constructor() { }

}
