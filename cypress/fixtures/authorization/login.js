import userData from './userData.json'

export const loginWithoutUI = () => {
    const request = JSON.stringify({
        method: 'POST',
        url: 'api/auth/login',
        body: {
            username: userData['Username'],
            password: userData['Password']
        },
        headers: {
            referer: Cypress.config().baseUrl
            // not sure why this is required, but didnt dig too deep
        }
    })
    cy.request(request)
}

export const loginWithUI = () => {
    
}