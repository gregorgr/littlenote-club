import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTypesComponent } from './music-types.component';

describe('MusicTypesComponent', () => {
  let component: MusicTypesComponent;
  let fixture: ComponentFixture<MusicTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
