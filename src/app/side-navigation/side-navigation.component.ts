import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rocket-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() links: Link[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}


export interface Link {
  name: string;
  url: string;
}
