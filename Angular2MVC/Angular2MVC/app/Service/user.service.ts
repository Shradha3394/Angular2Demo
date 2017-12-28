import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

    // Http Post
    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options).
            map((res: Response) => {
                let x = <any>res.json();
                return x;
            }).
            catch(this.handleError);
    }

    // Http Put
    put(url: string, id: number, model: any) {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options).
            map((res: Response) => <any>res.json()).
            catch(this.handleError);
    }

    // Http Delete
    delete(url: string, id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options).
            map((res: Response) => <any>res.json()).
            catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}