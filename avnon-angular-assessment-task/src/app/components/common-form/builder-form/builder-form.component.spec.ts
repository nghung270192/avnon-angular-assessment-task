import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderFormComponent } from './builder-form.component';

describe('BuilderComponent', () => {
  let component: BuilderFormComponent;
  let fixture: ComponentFixture<BuilderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
