import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rpsrock:boolean;
  rpsdecipher:boolean;
  rpsmem:boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    this.rpsrock = false;
    this.rpsdecipher = false;
    this.rpsmem = false;
  }
  
  rpsrockShow(){
    this.rpsrock = true;
    this.rpsdecipher = false;
    this.rpsmem = false;
  }
  rpsdecipherShow(){
    this.rpsdecipher = true;
    this.rpsrock = false;
    this.rpsmem = false;
  }
  rpsmemShow(){
    this.rpsdecipher = false;
    this.rpsrock = false;
    this.rpsmem = true;
  }

}
