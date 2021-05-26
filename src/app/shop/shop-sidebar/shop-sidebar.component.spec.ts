import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopSidebarComponent } from './shop-sidebar.component';

describe('ShopSidebarComponent', () => {
  let component: ShopSidebarComponent;
  let fixture: ComponentFixture<ShopSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
