import { Component, OnInit, Input } from '@angular/core';
import {Artikel} from '../../app/Artikel';
import {mockArtikels} from '../mockArtikels';
import { ActivatedRoute } from '@angular/router';
import { BlogartikelServiceService } from '../../blogartikel-service.service'


@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {
 artikels:Artikel[] = this.service.artikels; 
 constructor(private route:ActivatedRoute, private service:BlogartikelServiceService) { }
 @Input('artikel') artikel: Artikel;

  ngOnInit(): void {
	
	let id = this.route.snapshot.paramMap.get('id');
	if(id){
		this.artikel = this.service.getArtikelById(id, this.artikels);
	}
  }
	isNotCompact(){
		const display: string = this.route.snapshot.queryParamMap.get('display');
		if(display !== 'kompakt')
			return true;
		else return false;
		
	}
	
}
