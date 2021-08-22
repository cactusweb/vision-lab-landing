import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() displayUl: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  
  scrollTo( id: string, e?: any ){
    e?.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

}
