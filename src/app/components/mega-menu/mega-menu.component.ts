import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

}
