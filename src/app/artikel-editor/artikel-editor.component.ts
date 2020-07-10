import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogartikelServiceService } from '../../blogartikel-service.service';
import { Artikel } from '../Artikel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent implements OnInit {
 
  constructor(private route:ActivatedRoute, private service:BlogartikelServiceService, private location:Location) { }
  artikel:Artikel;
 cancel():void{
	this.location.back();
}
onChange(event):void{
	var files = event.srcElement.files;
	let fileName = this.artikel.bild = files[0].name;
	
}
save(){
	let changedTags = [];
	let tagValues = document.getElementById('tags');
	
}
  ngOnInit(): void {
	let id = this.route.snapshot.paramMap.get('id');
	if(id){
	let artikels = this.service.artikels;		
	this.artikel = this.service.getArtikelById(id, artikels);
	}
	
  }


}
