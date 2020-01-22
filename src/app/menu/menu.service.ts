import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MenuService {

    location: string;

    cartItems: any[];

    public setLocation(loc: string) {
        this.location = loc;
    }

    getLocation(): string {
        return this.location;
    }

    public setCart(items: any[]) {
        this.cartItems = items;
    }

    getCart(): any[] {
        return this.cartItems;
    }

    menuItems: any[] = [
        { Type: 'Thai', Name: 'Sausage', Price: '10.99' },
        { Type: 'Thai', Name: 'Soup', Price: '2.99' },
        { Type: 'American', Name: 'Pizza', Price: '5.99' },
        { Type: 'American', Name: 'Donuts', Price: '1.99' },
        { Type: 'Chinese', Name: 'Noodles', Price: '2.99' }
    ];

    getType(): any[] {
        return this.menuItems.map(result => result.Type).filter((value, index, self) => self.indexOf(value) === index);
    }

    getMenuItems(type: string): any[] {
        return this.menuItems.filter(result => result.Type === type).map(result => result.Name);
    }

    getPrice(type: string, menu: string): string {
        return this.menuItems.filter(result => result.Type === type).filter(result => result.Name === menu).map(result => result.Price).toString();

    }

    getTotalPrice(): number {
        let total = 0;
        if (this.cartItems) {
            total = this.cartItems.map(result => result.TotalPrice).reduce((sum, value) => Number(sum) + Number(value));
            if (this.countDecimals(total) > 2)
                total = Number(total.toFixed(2));
        }
        return total;
    }

    countDecimals(value: any) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    }
}