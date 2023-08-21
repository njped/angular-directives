import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  // myHeroes: string[] = ['Wonderful Woman', 'Batty Boy', 'Captain Cats'];
  myHeroes: Array<Hero> = [
    {
      name: 'Wonderful Woman',
      evil: false
    },
    {
      name: "Batty Boy",
      city: "Goth Hamb",
      evil: false
    },
    {
      name: "Captain Cats",
      city: "Goth Hamb",
      evil: true
    }
  ]
}
