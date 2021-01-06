import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private isDark:boolean = false;
  private dark:string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  modeDark() {
    this.isDark = !this.isDark;
    if(this.isDark) {
      console.log('Mode Dark Active');
      localStorage.setItem('Mode_Dark', 'true');
      document.documentElement.style.setProperty('--whiteColor', '#1D262D');
      document.documentElement.style.setProperty('--colorBlack', '#fff');
      document.documentElement.style.setProperty('--whiteColorBody', 'rgba(29, 38, 45, .9)');
      document.documentElement.style.setProperty('--colorBlackBody', '#fff');
      console.log(localStorage.getItem('Mode_Dark'))
    } else {
      console.log('Mode White Active');
      localStorage.setItem('Mode_Dark', 'false');
      document.documentElement.style.setProperty('--whiteColor', '#fff');
      document.documentElement.style.setProperty('--colorBlack', '#000');
      document.documentElement.style.setProperty('--whiteColorBody', '#fff');
      document.documentElement.style.setProperty('--colorBlackBody', '#000');
      console.log(localStorage.getItem('Mode_Dark'))
    }
  }
}
