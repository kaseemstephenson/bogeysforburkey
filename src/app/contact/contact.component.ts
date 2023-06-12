import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';  

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
      odds:any;

  constructor(private http:HttpClient) {}
 ngOnInit(){
         this.http.get("https://tranquil-shelf-18469.herokuapp.com/odds").subscribe((res:any)=>{
          this.odds = res
          console.log(res)
             })
         console.log(this.odds)


 }
}
