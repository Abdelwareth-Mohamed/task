import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVowelComponent } from './check-vowel.component';

describe('CheckVowelComponent', () => {
  let component: CheckVowelComponent;
  let fixture: ComponentFixture<CheckVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckVowelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
