import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { FussbereichComponent } from './fussbereich/fussbereich.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ArtikelShareComponent } from './artikel-share/artikel-share.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';

@NgModule({
	declarations: [
		AppComponent,
		ArtikelComponent,
		KopfbereichComponent,
		FussbereichComponent,
		SidebarComponent,
		ArtikelListeComponent,
		ArtikelEditorComponent,
		ImpressumComponent,
		KontaktComponent,
		ArtikelShareComponent,
		NotFoundComponent,
		CreateComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
