import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    
    private _url = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http: Http){
    }

    getUsers(){
        return this._http.get(this._url)
                .map(res => res.json());
    }

    // getUser(id){
    //     return this._http.get(this._url + "/" + id)
    //             .map(res => res.json());
    // }

    // updateUser(id,user){
    //     return this._http.put(this._url + "/" + id,JSON.stringify(user))
    //             .map(res => res.json());
    // }

    deleteUser(userId){
        return this._http.delete(this._url + "/" + userId)
            .map(res => res.json());
    }

    addUser(user){
        return this._http.post(this._url,JSON.stringify(user))
                    .map(res=> res.json());
    }
}