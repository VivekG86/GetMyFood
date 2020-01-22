import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from './menu.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [MenuService]
    })
      .compileComponents();
  })); 

  it('should create', async(inject([MenuService], (menuService: MenuService) => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  })));
});
