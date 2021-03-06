import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke-list/joke-list.component';
@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
   @Input('joke') data: Joke;
  constructor() { }

  ngOnInit() {
  }

}