import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  ENTER = 13
}

@Component({
  selector: 'memory-root',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  memorize:any;
  directions:any;
  memory_word:any;
  word:boolean;
  playbutton:boolean;
  player_arr:any;
  high_score:number;
  arrow:string;
  win:string;
  arrowclass:string;
  correctcolor:string;
  rps:string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    this.memorize = [];
    this.directions = ['','left','right','up','down'];
    this.word = false;
    this.playbutton = true;
    this.player_arr = [];
    this.high_score = 0;
    this.arrow = "";
    this.win = "";
    this.arrowclass = "arrow";
    this.correctcolor = "correctcolor";
    this.rps = "./../assets/images/rpsIDLE.gif"
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.player_guess('right');
      this.word = true;
      this.arrow= "right";

    }
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.player_guess('left');
      this.word = true;
      this.arrow= "left";
    }
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.player_guess('up');
      this.word = true;
      this.arrow= "up";
    }
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.player_guess('down');
      this.word = true;
      this.arrow= "down";
    }
    if (event.keyCode === KEY_CODE.ENTER) {
      this.submit_guess();
    }
  }

  play(){
    this.rps = "./../assets/images/rpsIDLE.gif"
    this.arrowclass = "arrow";
    this.arrow = "./../";
    this.win = "";
    this.player_arr = [];
    this.word = true;
    var index = Math.floor(Math.random()*4)+1;
    this.memorize.push(this.directions[index]);
    console.log('this.memorize', this.memorize);
    console.log('length',this.memorize[0]);
    var i = 0;
    this.memory_word = this.memorize[i];
    this.arrow = this.memorize[i];
      var timer = setInterval(()=>{
        i++;
        if(this.arrowclass == "arrow2"){
          this.arrowclass = "arrow";
        }
        else{
          this.arrowclass = "arrow2";
        }
        this.word = true;
        this.memory_word = this.memorize[i];
        this.arrow = this.memorize[i];
        setTimeout(()=>{
          this.word = false;
          this.arrow = "";
        }, 900);
        if(i == this.memorize.length){
          clearInterval(timer);
          this.word = false;
          this.playbutton = false;
        }
      }, 1000);
  }
  player_guess(guess){
    this.arrowclass = "arrow3";
    this.player_arr.push(guess);
    console.log(this.player_arr,"guesss play");
    if(this.player_arr.length == this.memorize.length){
      this.submit_guess();
    }
  }
  submit_guess(){
    console.log('submit guess')
    this.word = false;
    this.arrow = "./../";
    var correct;
    for(var i = 0; i < this.memorize.length; i++){
      if(this.memorize[i] != this.player_arr[i]){
        console.log('lose @ arr', i);
        this.high_score = 0;
        correct = false;
        this.win = "Incorrect";
        this.word = false;
        this.arrow = "./../";
        this.correctcolor = "correctcolor2";
        this.rps = "./../assets/images/rpsdeath.gif"
        setTimeout(()=>{
          this.word = false;
          this.arrow = "";
          this.playbutton = true;
          this.memorize = [];
        }, 2500);
      }
      else{
        correct = true;
      }
    }
    if(correct == true){
      this.word = false;
      this.arrow = "./../";
      this.win = "Correct"
      this.high_score += 25;
      this.correctcolor = "correctcolor";
      setTimeout(()=>{
        this.word = false;
        this.arrow = "";
        this.play();
      }, 2500);
    }
    else{
      this.word = false;
      this.high_score = 0;
      this.win = "Incorrect"
      this.arrow = "./../";
      this.correctcolor = "correctcolor2";
      this.rps = "./../assets/images/rpsdeath.gif"
      setTimeout(()=>{
        this.word = false;
        this.arrow = "";
        this.rps = "./../assets/images/rpsIDLE.gif";
        this.playbutton = true;
        this.memorize = [];
      }, 2500);
    }
  }
}
