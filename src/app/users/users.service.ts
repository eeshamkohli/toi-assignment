import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService{
    constructor(private httpClient : HttpClient){

    }
    getUsers() : Observable<any>{
       return this.httpClient.get<any>('https://randomuser.me/api/?results=100');
    }

    
}