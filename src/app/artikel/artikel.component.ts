import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Artikel} from '../../app/Artikel';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {
 constructor(private route:ActivatedRoute, private service:RestService) { }
 @Input('artikel') artikel: Artikel;
 @Output() deleteArt:EventEmitter<Artikel> = new EventEmitter();

  ngOnInit(): void {
	
	let id = this.route.snapshot.paramMap.get('id');
	if(id){
		this.service.getArtikel(id).subscribe(artikel=>{
			this.artikel = artikel;
		});
	}
  }

	isNotCompact(){
		const display: string = this.route.snapshot.queryParamMap.get('display');
		if(display !== 'kompakt')
			return true;
		else return false;
		
	}
	onDelete(artikel){
		this.deleteArt.emit(artikel);
		console.log('Emittet.');
	}
}


