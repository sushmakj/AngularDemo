import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
users$:User[];

constructor(private dataService:DataService){}

ngOnInit(){
  return this.dataService.getUser()
  .subscribe(data => this.users$ = data);
}

}
