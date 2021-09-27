import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavecacaoComponent } from './navecacao.component';

describe('NavecacaoComponent', () => {
  let component: NavecacaoComponent;
  let fixture: ComponentFixture<NavecacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavecacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavecacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
