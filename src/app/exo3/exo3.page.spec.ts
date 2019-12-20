import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exo3Page } from './exo3.page';

describe('Exo3Page', () => {
  let component: Exo3Page;
  let fixture: ComponentFixture<Exo3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exo3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
