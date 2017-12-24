import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    // Http Get
    get(url: string): Observable<any> {
        return this._http.get(url).
            map((res: Response) => {
                let x = <any>res.json();
                return x;
            }).
            catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}