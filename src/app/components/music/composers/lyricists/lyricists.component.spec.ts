import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricistsComponent } from './lyricists.component';

describe('LyricistsComponent', () => {
  let component: LyricistsComponent;
  let fixture: ComponentFixture<LyricistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyricistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LyricistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
