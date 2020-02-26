import userData from './userData.json'
import { clickButton } from '../elements/button.js'
import { emptyField, enterIntoField } from '../elements/field.js'
import { waitForAllXhrRequests } from '../helpers/wait.js'

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
    clickButton('Login')
    emptyField('Username')
    enterIntoField('Username', userData.Username)
    emptyField('Password')
    enterIntoField('Password', userData.Password)
    clickButton('SubmitLogin')
    waitForAllXhrRequests()
}