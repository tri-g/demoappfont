import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
	private baseURL='http://localhost:8082/api/v1/employees';
  constructor(private http:HttpClient) { }
  getEmployee(id:number):Observable<any>
  {
  	  	return this.http.get(`${this.baseURL}/${id}`);

  }
  getEmployeesList():Observable<any>
  {
  	return this.http.get(`${this.baseURL}`);
  }
  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseURL}`,employee);
  }
  deleteEmployee(id:number):Observable<Object>
  {
        return this.http.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }
  updateEmployee(id:number,value:any):Observable<Object>
  {
    return this.http.put(`${this.baseURL}/${id}`,value);

  }

}
