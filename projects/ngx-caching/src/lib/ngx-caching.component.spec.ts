import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCachingComponent } from './ngx-caching.component';

describe('NgxCachingComponent', () => {
  let component: NgxCachingComponent;
  let fixture: ComponentFixture<NgxCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
