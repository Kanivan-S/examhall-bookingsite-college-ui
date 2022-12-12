import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersStatusComponent } from './users-status.component';

describe('UsersStatusComponent', () => {
  let component: UsersStatusComponent;
  let fixture: ComponentFixture<UsersStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
