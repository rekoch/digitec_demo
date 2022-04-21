import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rocket-daily-offer',
  templateUrl: './daily-offer.component.html',
  styleUrls: ['./daily-offer.component.scss']
})
export class DailyOfferComponent implements OnInit {
  @Output() offerClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked() {
    this.offerClicked.emit();
  }
}
