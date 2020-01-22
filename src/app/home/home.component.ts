import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MenuService } from '../menu/menu.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: MenuService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  username: string;
  zipcode: string;

  onSubmit() {
    this.service.setLocation(this.zipcode);
    this.router.navigate(['/Menu', this.username]);
  }

}
