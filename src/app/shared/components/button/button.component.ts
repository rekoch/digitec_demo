import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rocket-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() variant: 'primary' | 'secondary' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
