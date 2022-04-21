import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rocket-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() rating = 0;
  ratingStars = ['star', 'star', 'star', 'star', 'star'];

  constructor() { }

  ngOnInit(): void {
  }

}
