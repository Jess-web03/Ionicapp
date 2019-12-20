import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exo2Page } from './exo2.page';

describe('Exo2Page', () => {
  let component: Exo2Page;
  let fixture: ComponentFixture<Exo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exo2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
