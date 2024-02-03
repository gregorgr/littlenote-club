import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposersComponent } from './composers.component';

describe('ComposersComponent', () => {
  let component: ComposersComponent;
  let fixture: ComponentFixture<ComposersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComposersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
