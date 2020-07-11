import { Component } from '@angular/core';
import {Artikel} from '../app/Artikel';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 constructor(private service:RestService) { }
	
}
