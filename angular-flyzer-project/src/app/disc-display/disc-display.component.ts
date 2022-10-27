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
  searchValue: string;
  @Input() disc: DISC;
  ngOnInit(): void {
  }
  colorValue = "white";
  onSelect(disc: DISC): void{
    this.selectedDisc = disc;
  }
  changeSearchValue(eventData: Event){
    console.log((<HTMLInputElement>eventData.target).value)
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
  public displayclic = "";
  onClick(){
    console.log("clicked my bag");
    this.displayclic = "you clicked it";
  }

}
