import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  //переменная для показа уведомлений(это просто пример)
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
