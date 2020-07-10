import { Injectable } from '@angular/core';
import { Artikel } from '../src/app/Artikel';
import {mockArtikels} from '../src/app/mockArtikels';
@Injectable({
  providedIn: 'root'
})
export class BlogartikelServiceService {
  
  constructor() { }
  artikels:Artikel[] = mockArtikels;
   
  getArtikelById(id:string, artikels:Artikel[]){
	let artikel = artikels.find(m=>m.id == id);
	if(artikel)
	return artikel;
}

getArtikelBySuchtag(suchtag){
	const artByTag:Artikel[] = [];
	for(let artikel of this.artikels){
		for(let tag of artikel.tags)
		if(tag===suchtag){
		artByTag.push(artikel);
			continue;			
		}
	}
	return artByTag;
}
getArtikelBySuchwort(suchwort){
	const artBySuchwort:Artikel[] = [];
	for(let artikel of this.artikels){
		for(let prop in artikel){
			if(artikel[prop]!== 'tags'||artikel[prop]!=='datum'||artikel[prop]!=='bild'){
				if(artikel[prop].search(suchwort)!==-1)
				artBySuchwort.push(artikel);
			}
			
		}
	}
	return artBySuchwort;
}
}
