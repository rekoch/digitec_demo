import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'rocket-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  imageCarousel: imageCarousel[] = [];
  rating = 4;
  ratingStars = ['star', 'star', 'star', 'star', 'star'];
  activeImage: imageCarousel = this.imageCarousel[0];
  sectionRouting: string[] = ['rating']

  constructor() { }

  ngOnInit(): void {
    this.imageCarousel.push({pictureUrl: '/assets/example-product.png'});
    this.imageCarousel.push({pictureUrl: '/assets/example-product.png'});
    this.imageCarousel.push({pictureUrl: '/assets/example-product.png'});
    this.imageCarousel.push({pictureUrl: '/assets/example-product.png'});
    this.imageCarousel.push({pictureUrl: '/assets/example-product.png'});
    this.imageCarousel.push({pictureUrl: '/assets/example-product.png'});

    this.activeImage = this.imageCarousel[0];
  }

}


export interface imageCarousel {
  pictureUrl: string;
}
