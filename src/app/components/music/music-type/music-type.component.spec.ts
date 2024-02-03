import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTypeComponent } from './music-type.component';

describe('MusicTypeComponent', () => {
  let component: MusicTypeComponent;
  let fixture: ComponentFixture<MusicTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
