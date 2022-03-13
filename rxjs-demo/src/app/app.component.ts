import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {  Observable, Observer, Subscription } from 'rxjs';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  incoming_message:any = "0";
  

  constructor(private ds:DemoServiceService,private cdr:ChangeDetectorRef){
    
  }
  ngOnInit(): void {
    this.ds.createObservable().subscribe(data =>{
      this.incoming_message = data;
      console.log(this.incoming_message)
      this.cdr.detectChanges();
    });


    // this.ds.subToBackend_demoChannel().subscribe(im=>{
    //   this.incoming_message = im;
    // })
  }
}
