import { Component, OnInit } from '@angular/core';
import {Artikel} from '../../app/Artikel';
import {mockArtikels}from '../../app/mockArtikels';
import { ActivatedRoute } from '@angular/router';
import { BlogartikelServiceService } from '../../blogartikel-service.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:BlogartikelServiceService) { }
suchwort:string;
artikels:Artikel[] = mockArtikels;
tagListe:string[] = this.getTagListe(this.artikels);
  ngOnInit(): void {
	
}
getTagListe(artikels){
	let tagListe = [];
	for(let artikel of this.artikels){
		for(let tag of artikel.tags){
			if(!tagListe.includes(tag))
			  tagListe.push(tag);
		}
	}
	return tagListe;
}
}
