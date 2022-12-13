import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockNavigationComponent } from './mock-navigation.component';

describe('MockNavigationComponent', () => {
  let component: MockNavigationComponent;
  let fixture: ComponentFixture<MockNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
