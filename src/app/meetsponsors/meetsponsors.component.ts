import { Component } from '@angular/core';

@Component({
  selector: 'app-meetsponsors',
  templateUrl: './meetsponsors.component.html',
  styleUrls: ['./meetsponsors.component.css']
})
export class MeetsponsorsComponent {
  images = [
    {path: '../assets/fl.jpg'},
    {path: '../assets/cp.jpg'},

]

ap:boolean = true
sc:number =  5
}
