import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import{DataService} from './data.service'

@Component({
  selector: 'hello',
  template: `<a (click)="router.navigate(['/havefun']);"
     class="btn btn-warning">Try Me on prod
  </a>
  <br>
  <br>
  <a (click)="router.navigate(['/nofun']);"
     class="btn btn-warning">Try Me on testing 1
  </a>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [DataService]
})
export class HelloComponent  {
  @Input() name: string;
  constructor(
    private router: Router
  ) { }
}
