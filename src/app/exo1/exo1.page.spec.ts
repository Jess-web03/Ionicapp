import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exo1Page } from './exo1.page';

describe('Exo1Page', () => {
  let component: Exo1Page;
  let fixture: ComponentFixture<Exo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exo1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
