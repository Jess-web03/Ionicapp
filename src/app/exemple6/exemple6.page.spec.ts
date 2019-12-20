import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple6Page } from './exemple6.page';

describe('Exemple6Page', () => {
  let component: Exemple6Page;
  let fixture: ComponentFixture<Exemple6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
