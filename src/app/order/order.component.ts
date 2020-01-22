import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router,
    private service: MenuService) { }

  orderItems: any[] = new Array();
  dateValue: string;

  ngOnInit() {
    this.orderItems = this.service.getCart();
    let now = new Date();
    this.dateValue = now.toString();
  }

  getTotal(): number {
    return this.service.getTotalPrice();
  }  

  onSubmit() {
    this.router.navigateByUrl('Confirm');
  }

}
