import { Component, OnInit, Input } from '@angular/core';
import {DISC} from '../disc';
import { DISCS } from '../discs';

@Component({
  selector: 'app-disc-display',
  templateUrl: './disc-display.component.html',
  styleUrls: ['./disc-display.component.css']
})
export class DiscDisplayComponent implements OnInit {

  constructor() { }
  selectedDisc: DISC;
  discs = DISCS;

  @Input() disc: DISC;
  ngOnInit(): void {
  }

  onSelect(disc: DISC): void{
    this.selectedDisc = disc;
  }

}
