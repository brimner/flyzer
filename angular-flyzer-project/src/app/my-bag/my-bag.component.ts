import { Component, OnInit, Input } from '@angular/core';
import { DISC } from '../disc';
import {DISCS} from "../discs";
@Component({
  selector: 'app-my-bag',
  templateUrl: './my-bag.component.html',
  styleUrls: ['./my-bag.component.css']
})
export class MyBagComponent implements OnInit {

  constructor() { }
  selectedDisc: DISC;
  discs = DISCS;

  @Input() disc: DISC;
  ngOnInit(): void {
  }
  colorValue = "black";
  onSelect(disc: DISC): void{
    this.selectedDisc = disc;
  }

}
