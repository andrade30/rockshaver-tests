class PreRegPage {
    // Função que preenche o formulário de cadastro
    fillForm(fullname, email) {
        cy.get('form h2')
        .should('be.visible')
        .and('have.text', 'Seus dados')

        cy.get('input[name="fullname"]')
            .type(fullname)

        cy.get('input[name="email"]')
            .type(email)
    }
    // Função que submete o formulário de cadastro
    submit() {
        cy.contains('button', 'Continuar')
            .click()
    }

    alertHave(fieldname, text) {
        cy.contains('label', fieldname)
            .parent()
            .find('.alert-msg')
            .should('be.visible')
            .and('have.text', text)
    }
}

export default new PreRegPage()