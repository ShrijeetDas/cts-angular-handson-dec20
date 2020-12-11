import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
      rollNo1 : number = 1;
      name1 : string = 'Alex';
      marks1: number = 48;

      rollNo2 : number = 2;
      name2 : string = 'Bruce';
      marks2: number = 75;

      rollNo3 : number = 3;
      name3 : string = 'Charlie';
      marks3: number = 25;
}
