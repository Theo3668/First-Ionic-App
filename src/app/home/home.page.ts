import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name;
  id;
  gender;
  contact;

  constructor(private route:Router) {}

  onSubit(){
    console.log(this.name);
    console.log(this.id);
    console.log(this.gender);
    console.log(this.contact);
  }
}
