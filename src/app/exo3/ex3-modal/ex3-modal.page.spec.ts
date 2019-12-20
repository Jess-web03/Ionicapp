import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ex3ModalPage } from './ex3-modal.page';

describe('Ex3ModalPage', () => {
  let component: Ex3ModalPage;
  let fixture: ComponentFixture<Ex3ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3ModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ex3ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
