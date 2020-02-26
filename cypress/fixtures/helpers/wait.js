export const waitForAllXhrRequests = () => {
	cy.window().then(
		{
			timeout: 120000,
		},
		win => new Cypress.Promise(resolve => win.requestIdleCallback(resolve)),
	)
}
