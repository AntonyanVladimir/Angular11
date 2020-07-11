import { Component, OnInit } from '@angular/core';
import {Artikel} from '../Artikel';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private restService:RestService) { }
	artikelListe:any[];
	
  ngOnInit(): void {
	let suchtag = this.route.snapshot.queryParamMap.get('tag');
	let suchwort = this.route.snapshot.queryParamMap.get('suchwort');
	if(suchtag&&suchwort){
		this.restService.getArtikelsBySuchtagUndSuchwort(suchtag, suchwort).subscribe(artikels=>{
			this.artikelListe = artikels;
		})
	} else
	if(suchtag)
	this.restService.getArticlesByTag(suchtag).subscribe(artikels=>{
		this.artikelListe = artikels;
	}, error=>console.log('Keine Artikels mit dem Tag'+suchtag));
	else if(suchwort){
		this.restService.getArticleBySuchwort(suchwort).subscribe(artikels=>{
			this.artikelListe = artikels;
		}, error=>alert('Keine Artikels mit dem suchwort'+suchwort));
	}
	else {
		this.restService.getArticles().subscribe(articles=>{
			this.artikelListe = articles;
		}, error=>console.log('Articles wurden nicht gefunden.'));
	}
	
  }
deleteArtikel(artikel:Artikel){
	this.artikelListe = this.artikelListe.filter(m=>m.id!== artikel.id);
	this.restService.deleteArticle(artikel.id).subscribe();
}


}
