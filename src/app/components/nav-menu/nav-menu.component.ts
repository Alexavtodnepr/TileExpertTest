import {Component, ElementRef, OnInit} from '@angular/core';
import { LinksArray } from 'src/app/shared/statics/navLinks';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.sass']
})
export class NavMenuComponent implements OnInit {
  LinksArray = LinksArray;
  mobileMenu:boolean = false;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  openMobi() {
    const body = this.elementRef.nativeElement.offsetParent;
    this.mobileMenu = !this.mobileMenu;
    if(this.mobileMenu){
      body.classList.add('.overflow-hidden');
      this.mobileMenu = true;
    }else{
      body.classList.remove('.overflow-hidden');
      this.mobileMenu = false;
    }
    console.log()
  }
}
