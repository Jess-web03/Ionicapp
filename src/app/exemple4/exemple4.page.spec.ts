import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple4Page } from './exemple4.page';

describe('Exemple4Page', () => {
  let component: Exemple4Page;
  let fixture: ComponentFixture<Exemple4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
