import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 


//designed for other classes use
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) //pass the class give back object
  { }

  GetStudentData():Observable<any>{
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1214880663844282368')
  }


}
