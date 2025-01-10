import './actions/precadastro.action'
import './actions/agendamento.action'

Cypress.Commands.add('agendamentoApi', (agendamento) => {
    // Request -> é uma função que consegue consumir uma API em tempo de execução do teste.
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseApi')}/api/agendamentos`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 3a8a9b8fae87baf503e7c5fe5b97fd72'
        },
        body: {
            nomeCliente: agendamento.usuario.nome,
            emailCliente: agendamento.usuario.email,
            data: agendamento.data,
            hora: agendamento.hora,
            matricula: agendamento.profissional.matricula,
            codigoServico: agendamento.servico.codigo
        }
    }).then((response) => {
        expect(response.status).to.eql(201)
    })
})

