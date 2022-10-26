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

}
