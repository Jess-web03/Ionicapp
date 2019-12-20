import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple5Page } from './exemple5.page';

describe('Exemple5Page', () => {
  let component: Exemple5Page;
  let fixture: ComponentFixture<Exemple5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
