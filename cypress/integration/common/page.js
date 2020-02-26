
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { goToPage } from '../../fixtures/pages/page';

Given(`I navigate to the page: {word}`, pageName => {
  goToPage(pageName)
});