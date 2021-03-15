import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csrf',
  templateUrl: './csrf.component.html',
  styleUrls: ['./csrf.component.css']
})
export class CSRFComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const myForm: HTMLFormElement = document.getElementById('CSRF') as HTMLFormElement;
     myForm.submit();
     this.router.navigate(['/'])
  }

}