import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artikel } from '../Artikel';
import { Location } from '@angular/common';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent implements OnInit {
 
  constructor(private route:ActivatedRoute, private service:RestService, private location:Location) { }
  artikel:Artikel;
 cancel():void{
	this.location.back();
}
onChange(event):void{
	var files = event.srcElement.files;
	let fileName = this.artikel.bild = files[0].name;
	
}
save(){
	this.service.editArticle(this.artikel);
	
}
  ngOnInit(): void {
	let id = this.route.snapshot.paramMap.get('id');
	if(id){
		this.service.getArtikel(id).subscribe(artikel=>{
			this.artikel = artikel;
		})
	}
	
  }


}
