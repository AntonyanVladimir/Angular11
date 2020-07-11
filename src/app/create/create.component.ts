import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Artikel } from '../Artikel';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private restService:RestService) { }
	ueberschrift:string;
	autor:string;
	datum:Date;
	anriss:string;
	text:string;
	bild:string;
	tags:string;
	
  ngOnInit(): void {
  }
onSubmit(){
	const artikel = {
		
		ueberschrift:this.ueberschrift,
		autor:this.autor,
		datum:this.datum,
		anriss:this.anriss,
		text:this.text,
		bild:this.bild,
		tags:this.tags.split(',')
	}
	this.addArtikel(artikel);

}
addArtikel(artikel){
	console.log('Artikel wird hinzugefügt!');
	this.restService.addArtikel(artikel).subscribe();
	}
}
