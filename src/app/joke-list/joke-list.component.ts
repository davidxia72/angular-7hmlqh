import { Component } from '@angular/core';

// domain model, store data
export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
	selector: 'jokeList',
	templateUrl: './joke-list.component.html',
  styleUrls:  ['./joke-list.component.css'] 
})
export class JokeListComponent {
	jokes: Joke[];
  name:string;

	constructor() {
    this.name = 'David';
		this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
	}

	toggle(joke) {
		joke.hide = !joke.hide;
	}
}
