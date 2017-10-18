import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBirdComponent } from './feature-bird.component';

describe('FeatureBirdComponent', () => {
  let component: FeatureBirdComponent;
  let fixture: ComponentFixture<FeatureBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
