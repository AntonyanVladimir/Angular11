import { Component, OnInit } from '@angular/core';
import {Artikel} from '../Artikel';
import {mockArtikels} from '../mockArtikels';
import { ActivatedRoute } from '@angular/router';
import { BlogartikelServiceService } from '../../blogartikel-service.service'

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:BlogartikelServiceService) { }
	artikelListe:Artikel[] = mockArtikels;
	
  ngOnInit(): void {
	const suchtag: string = this.route.snapshot.queryParamMap.get('suchtag');
		if(suchtag){
		this.artikelListe = this.service.getArtikelBySuchtag(suchtag);
	const suchwort: string = this.route.snapshot.queryParamMap.get('suchwort');
		if(suchwort){
			console.log(suchwort);
		this.artikelListe = this.service.getArtikelBySuchwort(suchwort);
  }
	}
  }

}
