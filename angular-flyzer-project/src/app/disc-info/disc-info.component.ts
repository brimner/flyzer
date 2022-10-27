import { Component, OnInit, Input } from '@angular/core';
import { DISC } from '../disc';
@Component({
  selector: 'app-disc-info',
  templateUrl: './disc-info.component.html',
  styleUrls: ['./disc-info.component.css']
})
export class DiscInfoComponent implements OnInit {
  @Input() disc: DISC;
  constructor() { }

  ngOnInit(): void {
  }
  //EDITING SPEED
  sub_speed(){
    this.disc.speed -= .5;
  }
  add_speed(){
    this.disc.speed += .5;
  }
  //EDITING GLIDE
  sub_glide(){
    this.disc.glide -= .5;
  }
  add_glide(){
    this.disc.glide += .5;
  }
  //EDITING TURN
  sub_turn(){
    this.disc.turn -= .5;
  }
  add_turn(){
    this.disc.turn += .5;
  }
  //EDITING FADE
  sub_fade(){
    this.disc.fade -= .5;
  }
  add_fade(){
    this.disc.fade += .5;
  }
}
