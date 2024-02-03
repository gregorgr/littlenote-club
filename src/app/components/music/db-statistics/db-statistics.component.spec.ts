import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbStatisticsComponent } from './db-statistics.component';

describe('DbStatisticsComponent', () => {
  let component: DbStatisticsComponent;
  let fixture: ComponentFixture<DbStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
