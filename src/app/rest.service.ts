import { Injectable } from '@angular/core';
import { Artikel } from '../../src/app/Artikel';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}
@Injectable({
	providedIn: 'root'
})

export class RestService {
	constructor(private http: HttpClient) { }
	baseUrl: string = 'http://localhost:3000';



	getArticles(): Observable<any[]> {
		return this.http.get<any[]>(this.baseUrl + '/' + 'articles');
	}
	getArticlesByTag(tag): Observable<any[]> {
		return this.http.get<any[]>(this.baseUrl + '/' + 'articles' + '/?tag=' + tag);
	}

	getArtikel(id): Observable<any> {
		return this.http.get<any>(this.baseUrl + '/' + 'articles' + '/' + id);
	}

	getArtikelsBySuchtagUndSuchwort(tag, suchwort): Observable<any[]> {
		return this.http.get<any[]>(this.baseUrl + '/' + 'articles' + '/?tag=' + tag + '&suchwort=' + suchwort);
	}

	getArticleBySuchwort(suchwort): Observable<any[]> {
		return this.http.get<any[]>(this.baseUrl + '/' + 'articles' + '/?suchwort=' + suchwort);
	}

	editArticle(artikel): Observable<any> {
		return this.http.put<any>(this.baseUrl + '/' + 'articles' + '/' + artikel.id, httpOptions);
	}
	deleteArticle(id):Observable<any>{
		return this.http.delete<any>(this.baseUrl + '/' + 'articles' + '/' + id, httpOptions);
	}
	addArtikel(artikel):Observable<any>{
		return this.http.post<any>(this.baseUrl+'/' + 'articles', artikel, httpOptions);
	}
}
