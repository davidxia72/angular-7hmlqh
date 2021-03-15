import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anticsrf',
  templateUrl: './anticsrf.component.html',
  styleUrls: ['./anticsrf.component.css']
})
export class ANTICSRFComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const myForm: HTMLFormElement = document.getElementById('CSRF') as HTMLFormElement;
     myForm.submit();
     this.router.navigate(['/'])
  }

}