import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: MenuService) { }


  cartItems: any[] = new Array();
  menuValues: any[];
  types: any[];
  username: string;
  location: string;
  unitPrice: string;
  quantityVal: string;
  selectedMenu: string = "select";

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.location = this.service.getLocation();
    this.types = this.service.getType();
  }

  @ViewChild('menuForm', { static: false }) public menuForm: NgForm

  onSubmit() {
    this.service.setCart(this.cartItems);
    this.router.navigateByUrl('Order');
  }

  onOptionsSelectedType(selectedVal: string) {
    this.menuValues = this.service.getMenuItems(selectedVal);
    this.unitPrice = "";
    this.quantityVal = "";
  }

  onOptionsSelectedMenu(selectedType: string, selectedMenu: string) {

    this.unitPrice = this.service.getPrice(selectedType, selectedMenu);
  }

  addItems() {
    let cart = {
      Name: this.selectedMenu,
      Price: this.unitPrice,
      Quantity: this.quantityVal,
      TotalPrice: (Number(this.unitPrice) * Number(this.quantityVal)).toFixed(2)
    };

    this.cartItems.push(cart);
  }

  deleteRow(i: number) {
    this.cartItems.splice(i, 1);
  }

}
