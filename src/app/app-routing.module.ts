import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';





const routes: Routes = [
	{ path: '', component: ArtikelListeComponent },
	{ path: 'articles', component: ArtikelListeComponent },
	{ path: 'articles/:id', component: ArtikelComponent },
	{ path: 'editArticle/:id', component: ArtikelEditorComponent },
	{ path: '**', component:NotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
