import { Component, OnInit } from '@angular/core';

import { Recruit } from '../recruit.model';


@Component({
  selector: 'recruit-form',
  templateUrl: './recruit-form.component.html',
  styleUrls: ['./recruit-form.component.css']
})
export class RecruitFormComponent implements OnInit {

model = new Recruit('', '', '', '','');

  constructor() { }

  ngOnInit() {
  }

get currentBook(){
return JSON.stringify(this.model);
}

}
//export class DemoForm {
//  onSubmit(form: any): void {
//    console.log('you submitted value:', form);
//  }
//}
