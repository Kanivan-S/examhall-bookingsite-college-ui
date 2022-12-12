import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectHistoryComponent } from './reject-history.component';

describe('RejectHistoryComponent', () => {
  let component: RejectHistoryComponent;
  let fixture: ComponentFixture<RejectHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
