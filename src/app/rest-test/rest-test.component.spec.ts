import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTestComponent } from './rest-test.component';

describe('RestTestComponent', () => {
  let component: RestTestComponent;
  let fixture: ComponentFixture<RestTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
