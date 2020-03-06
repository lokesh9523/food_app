import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddfoodComponent } from './addfood.component';

describe('AddfoodComponent', () => {
  let component: AddfoodComponent;
  let fixture: ComponentFixture<AddfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
