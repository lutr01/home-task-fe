
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { loginWithoutUI, loginWithUI } from '../../fixtures/authorization/login';

Given(`I am logged in user`, () => {
  loginWithoutUI()
});

Given(`I log in`, () => {
    loginWithUI()
  });