import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'decipher-root',
  templateUrl: './decipher.component.html',
  styleUrls: ['./decipher.component.css']
})
export class DecipherComponent implements OnInit{
  words:any;
  word_play:string;
  guess:any;
  playword:boolean;
  guesses:any;
  count:number;
  gameword:string;
  answer:string;
  showanswer:boolean;
  showcount:boolean;
  highscore:number;
  win:boolean;
  execute:string;
  countcolor:string;
  countdown:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  ngOnInit(){
    this.words = ["","funny", "knowledge", "level", "axe", "shovel", "hammer", "laugh", "scream", "joke", "speech", "city", "house", "cow", "village", "angry", "taste", "decipher", "magic", "heroic", "create", "artistic", "material", "medicine", "plastic", "earth", "maniac", "activate", "explore", "whiskey", "resource", "universe", "planet", "atmosphere", "hello", "epic", "beer", "mouse", "paint", "chair", "lamp", "shoe", "sport", "nerd", "computer", "electronic", "cyber", "kiss", "bedroom", "remote", "option", "sweater", "cheat", "code", "idea", "soil", "water", "darkness", "electricity", "shockwave", "element", "health", "unique", "epic", "vengence", "thunder", "lightning", "ocean", "breeze", "torque", "aroma", "visual", "artistic", "control", "beautiful", "equipment", "ultimate"];
    this.word_play = "";
    this.showcount = false;
    this.count = 60;
    this.play();
    this.guess = {guess:""};
    this.guesses = [];
    this.answer = "";
    this.showanswer = false;
    this.highscore = 0;
    this.win = false;
    this.execute = "./../assets/images/executeor.gif";
    this.countcolor = "countgreen";
    this.countcolor = "countgreen";
  }

  play(){
    this.countcolor = "countgreen";
    this.guesses = [];
    this.execute = "./../assets/images/executeor.gif";
    this.win = false;
    this.timer();
    this.word_play = "";
    this.gameword = "";
    this.answer = "";
    this.showanswer = false;
    this.playword = true;
    let index = Math.floor(Math.random()* 76) + 1;
    this.gameword = this.words[index];
    let webster = {};
    
    while(this.word_play.length < this.gameword.length){
      var str_val = Math.floor(Math.random()* this.gameword.length-1) + 1;
      if(str_val in webster){
      }
      else{
        webster[str_val] = str_val;
        this.word_play += this.gameword[str_val];
      }
    }
  }

  player_guess(){
    if(this.guess.guess == this.gameword){
      clearInterval(this.countdown);
      this.guess.guess = "";
      this.highscore += this.gameword.length;
      this.showcount = false;
      this.gameword = "";
      this.playword = false;
      this.win = true;
      this.guesses = [];
      setTimeout(() => {
        this.play();
      }, 2000);
    }
    else{
      if(this.guess.guess == ""){
        this.guess.guess = "Wasted a Guess";
      }
      this.guesses.push(this.guess.guess)
      this.guess.guess = "";
      if(this.guesses.length == 3){
        clearInterval(this.countdown);
        this.showcount = false;
        this.guesses = [];
        this.answer = this.gameword;
        this.showanswer = true;
        this.gameword = "";
        this.highscore = 0;
        this.execute = "./../assets/images/executeordeath.gif";
        setTimeout(() => {
          this.play();
        }, 3400);
      }
    }
  }
  timer(){
    this.count = 60;
    this.showcount = true;
    this.countdown = setInterval(()=>{
      this.count --;
      if(this.count == 30){
        this.countcolor = "countyellow";
      }
      if(this.count == 10){
        this.countcolor = "countred";
      }
      if(this.count == 0){
        this.offwithhishead();
        this.showcount = false;
        this.count = 0;
        clearInterval(this.countdown);
        return;
      }
    },1000);
    return;
  }
  offwithhishead(){
    this.highscore = 0;
    this.guesses = [];
    this.execute = "./../assets/images/executeordeath.gif";
    this.win = false;
    this.showcount = false;
    this.playword = false;
    this.answer = this.gameword;
    this.showanswer = true;
    setTimeout(() => {
      this.play();
    }, 3400);
  }
}


