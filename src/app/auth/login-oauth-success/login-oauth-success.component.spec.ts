import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOauthSuccessComponent } from './login-oauth-success.component';

describe('LoginOauthSuccessComponent', () => {
  let component: LoginOauthSuccessComponent;
  let fixture: ComponentFixture<LoginOauthSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginOauthSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOauthSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
