import calendario from '../fixtures/calendario.json'
import agendamentos from '../fixtures/agendamentos.json'

describe('Agendamento', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/api/calendario', {
            statusCode: 200,
            body: calendario
        }).as('getCalendario');
    });

    it('Deve fazer um novo agendamento', () => {
        const agendamento = agendamentos.sucesso;

        cy.deleteMany({ emailCliente: agendamento.usuario.email }, {collection: 'agendamentos'})
            .then(result => {
                cy.log(result);
            });

        cy.preCadastroLS(agendamento.usuario)

        // Passo: Iniciar Agendamento
        cy.iniciarAgendamento();

        // Passo: Escolher o Profissional
        cy.escolherProfissional(agendamento.profissional.nome);

        // Passo: Selecionar Serviço
        cy.selecionarServico(agendamento.servico.descricao);

        // Passo: Escolher o Dia do Agendamento
        cy.escolherDiaAgendamento(agendamento.dia);

        // Passo: Escolher o horário do Agendamento
        cy.escolherHorarioAgendamento(agendamento.hora);

        // Passo: Finaliza o Agendamento
        cy.finalizarAgendamento();

        // Desfecho
        cy.get('h3').should('be.visible')
            .and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.');
    });

    it('Deve mostrar o slot ocupado', () => {
        const agendamento = agendamentos.duplicado;

        cy.deleteMany({ emailCliente: agendamento.usuario.email }, {collection: 'agendamentos'})
            .then(result => {
                cy.log(result);
            });

        cy.agendamentoApi(agendamento)

        cy.preCadastroLS(agendamento.usuario)

        // Passo: Iniciar Agendamento
        cy.iniciarAgendamento();

        // Passo: Escolher o Profissional
        cy.escolherProfissional(agendamento.profissional.nome);

        // Passo: Selecionar Serviço
        cy.selecionarServico(agendamento.servico.descricao);

        // Passo: Escolher o Dia do Agendamento
        cy.escolherDiaAgendamento(agendamento.dia);

        cy.get(`[slot="${agendamento.hora} - ocupado"]`)
            .should('be.visible')
            .find('svg')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
    });

    it('Deve retornar uma notificação no sumário em caso de conflito de disponibilidade', () => {
        const agendamento = agendamentos.conflito;

        cy.deleteMany({ emailCliente: agendamento.usuario.email }, {collection: 'agendamentos'})
            .then(result => {
                cy.log(result);
            });

        cy.preCadastroLS(agendamento.usuario)

        // Passo: Iniciar Agendamento
        cy.iniciarAgendamento();

        // Passo: Escolher o Profissional
        cy.escolherProfissional(agendamento.profissional.nome);

        // Passo: Selecionar Serviço
        cy.selecionarServico(agendamento.servico.descricao);

        // Passo: Escolher o Dia do Agendamento
        cy.escolherDiaAgendamento(agendamento.dia);

        cy.escolherHorarioAgendamento(agendamento.hora);

        cy.agendamentoApi(agendamento);

        cy.finalizarAgendamento();

        cy.get('.alert-error')
            .should('be.visible')
            .and('have.text', 'Já existe um agendamento para esta data e hora. Por favor, escolha outro local.')
    });
});