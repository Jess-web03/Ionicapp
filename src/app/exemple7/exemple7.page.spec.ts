import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple7Page } from './exemple7.page';

describe('Exemple7Page', () => {
  let component: Exemple7Page;
  let fixture: ComponentFixture<Exemple7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
