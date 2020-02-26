import pages from './pages.json'

export const goToPage = pageName => {
    cy.visit(pages[pageName])
}

