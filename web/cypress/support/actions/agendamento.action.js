// Passo: Iniciar Agendamento
Cypress.Commands.add('iniciarAgendamento', () => {
    cy.contains('a', 'Agendar um horário').click();
});

// Passo: Escolhe o Profissional
Cypress.Commands.add('escolherProfissional', (nomeProfissional) => {
    cy.contains('span', 'Membros da Equipe')
        .should('be.visible');
    cy.contains('div', nomeProfissional)
        .parent()
        .click();
});

// Passo: Selecionar Serviço
Cypress.Commands.add('selecionarServico', (servicoDescricao) => {
    cy.contains('span', 'Serviços')
        .should('be.visible');
    cy.contains('div', servicoDescricao)
        .parent()
        .click();
});

// Passo: Escolher o dia do Agendamento
Cypress.Commands.add('escolherDiaAgendamento', (dia) => {
    cy.contains('span', 'Dias Disponíveis')
        .should('be.visible');
    cy.contains('.dia-semana', dia)
        .click();
});

// Passo: Escolher o horário do Agendamento
Cypress.Commands.add('escolherHorarioAgendamento', (hora) => {
    cy.contains('span', 'Horários Disponíveis')
        .should('be.visible');
    cy.contains('.hora-opcao', hora)
        .click();
});

// Passo: Finaliza Agendamento
Cypress.Commands.add('finalizarAgendamento', () => {
    cy.contains('button', 'Confirmar e reservar')
        .click();
});
