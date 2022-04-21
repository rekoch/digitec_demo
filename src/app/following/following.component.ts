import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rocket-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  reviewFollowing: CommunityPeople[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reviewFollowing.push({name: 'fridolin.schubi', role: 'top-reviewer'});
    this.reviewFollowing.push({name: 'sabi.irgendwenn', role: 'amateur-reviewer'});
    this.reviewFollowing.push({name: 'chris.eternal', role: 'baby-reviewer'});
    this.reviewFollowing.push({name: 'christian.hero', role: 'digitec-employee'});
  }
}

export interface CommunityPeople {
  name: string;
  role: string;
}
