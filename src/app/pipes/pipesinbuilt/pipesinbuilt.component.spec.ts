import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesinbuiltComponent } from './pipesinbuilt.component';

describe('PipesinbuiltComponent', () => {
  let component: PipesinbuiltComponent;
  let fixture: ComponentFixture<PipesinbuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesinbuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesinbuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
