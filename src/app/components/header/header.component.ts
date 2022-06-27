import { Component, OnInit } from '@angular/core';
import {LinksArray} from "../../shared/statics/navLinks";
import {animationsSearch} from "../../shared/animation/searchAnimation";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  //переменная для показа уведомлений(это просто пример)
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
