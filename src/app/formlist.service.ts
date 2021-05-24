import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormlistService {

  constructor(private http:HttpClient) { }
  
  getList():Observable<User[]>{
  return this.http.get<User[]>("http://localhost:8080/list");
  }

  saveValue(user:User):Observable<Object>{
return this.http.post("http://localhost:8080/form ",user);
  }
}
