import {Artikel} from '../app/Artikel'
export const mockArtikels:Artikel[] = 
	[
	{
		id:'1',
		ueberschrift: 'HTML Dokumente',
		autor: 'Thomas Richter',
		datum: new Date('2018-05-15'),
		anriss: 'Eine kurze Einführung in HTML-Dokumente',
		text: 'HTML Dokumente dienen der Strukturierung von Inhalten, die im Web bzw. mit Webtechnologien wie Internetbrowser und Hypertext Transfer Protocol (HTTP) verbreitet werden sollen. HTML Dokumente bestehen aus HTML-Elementen. Das einfachste HTML5 Dokument ist: <br>'
		+ '<pre>'
		+ '&lt;!DOCTYPE html&gt;\n'
		+ '&lt;html&gt;\n'
		+ '  &lt;head&gt;\n'
		+ '    &lt;title&gt;Titel des Dokuments&lt;/title&gt;\n'
		+ '  &lt;/head&gt;\n'
		+ '  &lt;body&gt;\n'
		+ '  &lt;/body&gt;\n'
		+ '&lt;/html&gt;\n'
		+ '</pre>',
		bild: 'https://cdn.pixabay.com/photo/2020/04/13/17/16/netherlands-5039354_960_720.jpg',
		tags: ['HTML5', 'Dokument', 'HTTP']
	},
	{
		id:'2',
		ueberschrift: 'HTML Elemente',
		autor: 'Thomas Richter',
		datum: new Date('2018-05-15'),
		anriss: 'Eine kurze Einführung in HTML Elemente',
		text: 'Die HTML Elemente eines HTML Dokuments sind ineinander geschachtelt und bilden damit eine hierarchische Struktur, einen Baum. Ein Element besteht üblicherweise aus einem öffnenden und einem schließenden Tag. Zwischen den beiden Tags befindet sich der eigentliche Inhalt des Elements.<br> Weiterhin können im öffnenden Tag Attribute in Form von Schlüssel-Wert Paaren notiert werden.<br><br>Beispiel: <code>&lt;a href="https://w3.org"&gt;Das ist ein Link auf ein anderes HTML-Dokument (W3C)&lt;/a&gt;</code> wird dargestellt als:<br><br><a href="https://w3.org">Das ist ein Link auf ein anderes HTML-Dokument (W3C)</a>',
		bild: 'https://cdn.pixabay.com/photo/2020/06/29/17/41/meditate-5353620_960_720.jpg',
		tags: ['HTML5', 'Element']
	},	
	{
		id:'3',
		ueberschrift: 'Semantische Strukturierung von HTML-Seiten',
		autor: 'Thomas Richter',
		datum: new Date('2011-11-18'),
		anriss: 'Ein kurzer Überblick über semantische Elemente in HTML5.',
		text: 'In der Vergangenheit wurden HTML-Dokumente häufig mit Tabellen oder Frames (ok, sehr weit zurückliegende Vergangenheit...) strukturiert. Später wurden dafür <code>&lt;div&gt;</code>-Elemente verwendet. In HTML5 gibt es Elemente, die es erlauben, den einzelnen Teilen des Dokuments eine Semantik zu verleihen, die von modernen Browsern ausgewertet wird und ggf. die Darstellung - z. B. auf Mobilgeräten und in Readern - beeinflusst. Beispielsweise lässt sich ein Dokument mit den Elementen <code>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</code> grob in Kopf-, Inhalts- und Fußbereich unterteilen. Weitere semantische Elemente sind <code>&lt;nav&gt;, &lt;aside&gt;, &lt;article&gt;, &lt;section&gt;</code>',
		bild: 'https://cdn.pixabay.com/photo/2020/04/11/20/35/lighthouse-5031977_960_720.jpg',
		tags: ['Semantik', 'HTML5', 'Element']
	},	
];

	
