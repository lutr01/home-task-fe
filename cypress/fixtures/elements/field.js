import { getCurrentPage } from "../pages/page"

export const emptyField = fieldName => {
    const page = getCurrentPage()

    cy.get(page.fields[fieldName].CSS)
		.scrollIntoView()
		.focus()
		.clear()
}

export const enterIntoField = (fieldName, text) => {
    const page = getCurrentPage()

    cy.get(page.fields[fieldName].CSS)
		.scrollIntoView()
		.focus()
		.type(`${text}`)
}