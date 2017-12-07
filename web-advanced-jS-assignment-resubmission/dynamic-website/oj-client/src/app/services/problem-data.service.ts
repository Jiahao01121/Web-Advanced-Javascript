import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { Problem } from '../models/problem.model'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProblemDataService {

  private _problemSource = new BehaviorSubject<Problem[]> ([]);

  constructor(private httpClient: HttpClient){}


  getData(): BehaviorSubject<Problem[]> {
  // no need to use observable, can directly subscribe from subject
  // getData(): Observable<Problem[]> {
    this.httpClient.get('api/v1/problems')
      .toPromise()
      .then((res: any) => this._problemSource.next(res) )
      // .catch(this.handleError);
    return this._problemSource
    // no need to use observable, can directly subscribe from subject
    // .asObservable();
  }


  detailPageData(num: number): Observable<any> {
      return this.httpClient.get(`api/v1/problem/${num}`)
        // .toPromise()
        // .then((res: any) => res)
  }


  addData(data: Problem) {
    const options = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    // return
    // no need to return stuff.
    this.httpClient.post('api/v1/problems',data,options)
      .toPromise()
      // .then((res: any) => {
      //   // this.getData();
      //   // return res;
      //   //no need to return value.
      // })
      // .catch(this.handleError)
  }


  private handleError(error: any): Promise<any>{
    return Promise.reject(error.body || error)
  }

};
