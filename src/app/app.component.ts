import {Component, OnInit} from '@angular/core';
import {Link} from "./side-navigation/side-navigation.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DigitecDemo';
  links: Link[] = [];

  ngOnInit(): void {
    this.links.push({name: 'Audio', url: '/audio'});
    this.links.push({name: 'Büromaterial', url: '/office'});
    this.links.push({name: 'Drohen + Elektronik', url: '/drones'});
    this.links.push({name: 'Foto + Video', url: '/photo'});
    this.links.push({name: 'Gaming + VR', url: '/gaming'});
    this.links.push({name: 'Smartphones', url: '/phones'});
    this.links.push({name: 'Netzwerk', url: '/network'});
    this.links.push({name: 'PC Komponenten', url: '/pc-components'});
    this.links.push({name: 'Notebooks + Tablets', url: '/notebooks'});
    this.links.push({name: 'PCs + Server', url: '/pcs'});
    this.links.push({name: 'Peripherie', url: '/peripherie'});
    this.links.push({name: 'Smartwatches', url: '/watches'});
    this.links.push({name: 'Software', url: '/software'});
    this.links.push({name: 'TV + Heimkino', url: '/tv'});
    this.links.push({name: 'Haushalt', url: '/housewares'});
  }


}
