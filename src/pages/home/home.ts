import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GetProvider} from "../../providers/get/get";
import {Professor} from "../../models/Professor";
import {Student} from "../../models/Student";
import {StudentHomePage} from "../student-home/student-home";
import {ProfessorHomePage} from "../professor-home/professor-home";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;

  showPass: boolean = false;
  type: string = 'password';

  professor: Professor;
  student: Student;

  constructor(private navCtrl: NavController,
              private getService: GetProvider) {

  }


  submit(){
    console.log(this.email + ' ' + this.password);
    let user = {
      email: this.email,
      password: this.password
    };
    this.getService.login(user).subscribe(loggedUser=>{
      if(loggedUser.professor != null){
        this.professor = loggedUser.professor;
        this.navCtrl.push(ProfessorHomePage, {param: this.professor});
      }else if (loggedUser.student != null){
        this.student = loggedUser.student;
        this.navCtrl.push(StudentHomePage, {param: this.student})
      }else{
        console.log('not logged in');
      }
    });
  }

  showPassword(){
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
