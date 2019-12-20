import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exemple3Page } from './exemple3.page';

describe('Exemple3Page', () => {
  let component: Exemple3Page;
  let fixture: ComponentFixture<Exemple3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemple3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exemple3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
