import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeListComponent } from './../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
	id:number;
	employee:Employee;

  constructor(private route:ActivatedRoute,private router:Router,private employeeservice:EmployeeService) { }

  ngOnInit() {
  	this.employee=new Employee();
  	this.id=this.route.snapshot.params['id'];
  	this.employeeservice.getEmployee(this.id)
  	.subscribe(data=>{console.log(data) 
  		this.employee=data;},error=>console.log(error));
  }
  list(){
  	this.router.navigate(['employees']);
  }
}
