import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'levelone-root',
  templateUrl: './levelone.component.html',
  styleUrls: ['./levelone.component.css']
})
export class LeveloneComponent implements OnInit {
  playerhealth:number;
  enemyhealth:number;
  rps:any;
  giffs:string;
  rockclass:string;
  paperclass:string;
  scissorsclass:string;
  shoot:string;
  buttons:boolean;
  playerhand:string;
  enemyhand:string;
  played:boolean;
  result:string;
  result_text:boolean;
  rand:number;
  win:boolean;
  lose:boolean;
  playagain:boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit() {
    this.playerhealth = 100;
    this.enemyhealth = 100;
    this.rps = ["","rock","paper","scissors"];
    this.giffs = "./../assets/images/nerdattidlegifs.gif";
    this.rockclass = "rock";
    this.paperclass = "paper";
    this.scissorsclass = "scissors";
    this.shoot = "./../assets/images/element1.gif";
    this.buttons = true;
    this.played = true;
    this.result_text = false;
    this.win = false;
    this.lose = false;
    this.playagain = false;
  }

  winner(){
    this.result_text = false;
    this.win = true;
    this.lose = false;
    this.buttons = false;
    this.shoot = "";
    this.playagain = true;
  }
  loser(){
    this.result_text = false;
    this.lose = true;
    this.win = false;
    this.buttons = false;
    this.shoot = "";
    this.playagain = true;
  }

  newgame(){
    this.playerhealth = 100;
    this.enemyhealth = 100;
    this.rps = ["","rock","paper","scissors"];
    this.giffs = "./../assets/images/nerdattidlegifs.gif";
    this.rockclass = "rock";
    this.paperclass = "paper";
    this.scissorsclass = "scissors";
    this.shoot = "./../assets/images/element1.gif";
    this.buttons = true;
    this.played = true;
    this.result_text = false;
    this.win = false;
    this.lose = false;
    this.playagain = false;

  }
  play(string){
    this.buttons = false;
    this.rand = Math.floor(Math.random() * 3)+1;
    if(string == "rock"){
      this.shoot = "./../assets/images/shoot.gif";
      setTimeout(() => {
        this.rock();
        this.shoot = "";
      }, 2000);
    }
    if(string == "paper"){
      this.shoot = "./../assets/images/shoot.gif";
      setTimeout(() => {
        this.paper();
        this.shoot = "";
      }, 2000);
    }
    if(string == "scissors"){
      this.shoot = "./../assets/images/shoot.gif";
      setTimeout(() => {
        this.scissors();
        this.shoot = "";
      }, 2000);
    }
  }

  reset(){
    this.result_text = false;
    this.buttons = true;
    this.played = true;
    this.shoot = "./../assets/images/element1.gif";
    this.giffs = "./../assets/images/nerdattidlegifs.gif";
    // this.played = true;
  }

  rock(){
    this.played = false;
    this.shoot = "";
    if(this.rps[this.rand] == "rock"){
      this.playerhand = "./../assets/images/rockrealpng.png";
      this.enemyhand = "./../assets/images/rockrealpng.png";
      this.result = "Draw..."
      this.result_text = true;
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
    if(this.rps[this.rand] == "paper"){
      this.playerhand = "./../assets/images/rockrealpng.png";
      this.enemyhand = "./../assets/images/paper.png";
      this.playerhealth -= 20;
      this.giffs = "./../assets/images/bullypunch.gif";
      this.result = "Lose."
      this.result_text = true;
      if(this.playerhealth <= 0){
        this.loser();
        return
      }
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
    if(this.rps[this.rand] == "scissors"){
      this.playerhand = "./../assets/images/rockrealpng.png";
      this.enemyhand = "./../assets/images/scissorsrealcopy.png";
      this.enemyhealth -= 20;
      this.giffs = "./../assets/images/nerdattack.gif";
      this.result = "Win!"
      this.result_text = true;
      if(this.enemyhealth <= 0){
        this.winner();
        return;
      }
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
  }
  
  paper(){
    this.played = false;
    this.shoot = "";
    if(this.rps[this.rand] == "rock"){
      this.playerhand = "./../assets/images/paper.png";
      this.enemyhand = "./../assets/images/rockrealpng.png";
      this.enemyhealth -= 20;
      this.giffs = "./../assets/images/nerdattack.gif";
      this.result = "Win!"
      this.result_text = true;
      if(this.enemyhealth <= 0){
        this.winner();
        return;
      }
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
    if(this.rps[this.rand] == "paper"){
      this.playerhand = "./../assets/images/paper.png";
      this.enemyhand = "./../assets/images/paper.png";
      this.result = "Draw..."
      this.result_text = true;
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
    if(this.rps[this.rand] == "scissors"){
      this.playerhand = "./../assets/images/paper.png";
      this.enemyhand = "./../assets/images/scissorsrealcopy.png";
      this.playerhealth -= 20;
      this.result = "Lose."
      this.result_text = true;
      this.giffs = "./../assets/images/bullypunch.gif";
      if(this.playerhealth <= 0){
        this.loser();
        return
      }
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
  }

  scissors(){
    this.played = false;
    this.shoot = "";
    if(this.rps[this.rand] == "rock"){
      this.playerhand = "./../assets/images/scissorsrealcopy.png";
      this.enemyhand = "./../assets/images/rockrealpng.png";
      this.playerhealth -= 20;
      this.giffs = "./../assets/images/bullypunch.gif"; 
      this.result = "Lose."
      this.result_text = true;
      if(this.playerhealth <= 0){
        this.loser();
        return
      }
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
    if(this.rps[this.rand] == "paper"){
      this.playerhand = "./../assets/images/scissorsrealcopy.png";
      this.enemyhand = "./../assets/images/paper.png";
      this.enemyhealth -= 20;
      this.giffs = "./../assets/images/nerdattack.gif";
      this.result = "Win!"
      this.result_text = true;
      if(this.enemyhealth <= 0){
        this.winner();
        return;
      }
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
    if(this.rps[this.rand] == "scissors"){
      this.playerhand = "./../assets/images/scissorsrealcopy.png";
      this.enemyhand = "./../assets/images/scissorsrealcopy.png";
      this.result = "Draw..."
      this.result_text = true;
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
  }
  rockclassb(){
    this.rockclass = "rockb";
  }
  rockclassa(){
    this.rockclass = "rock";
  }
  paperclassb(){
    this.paperclass = "paperb";
  }
  paperclassa(){
    this.paperclass = "paper";
  }
  scissorsclassb(){
    this.scissorsclass = "scissorsb";
  }
  scissorsclassa(){
    this.scissorsclass = "scissors";
  }

}
