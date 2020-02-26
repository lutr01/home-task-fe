import { getCurrentPage } from "../pages/page"

export const clickButton = buttonName => {
    const page = getCurrentPage()

    cy.get(page.buttons[buttonName].CSS)
    .scrollIntoView()
    .focus()
    .click()
}