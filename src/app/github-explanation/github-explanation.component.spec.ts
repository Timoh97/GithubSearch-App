import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubExplanationComponent } from './github-explanation.component';

describe('GithubExplanationComponent', () => {
  let component: GithubExplanationComponent;
  let fixture: ComponentFixture<GithubExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
