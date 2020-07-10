import { Component } from '@angular/core';
import {Artikel} from '../app/Artikel';
import {mockArtikels} from './mockArtikels' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uebungsblatt7';
  artikels:Artikel[] = mockArtikels;
test:string = 'TEsst';			   
}
