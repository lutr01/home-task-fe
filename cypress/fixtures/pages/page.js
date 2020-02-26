import pages from './pages.json'

export const goToPage = pageName => {
    const page = getPage(pageName)
    cy.visit(page.path)
}

export const getPage = pageName => {
	const page = pages[pageName]
	return {
        path: page.Path,
		buttons: {
			...page.Buttons,
		},
		fields: {
			...page.Fields,
		},
	}
}


