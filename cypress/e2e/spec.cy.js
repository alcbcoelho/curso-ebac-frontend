/// <reference types="Cypress" />

function retornaLista(obj) {
  return `<li>${obj.nome}</li><li>${obj.tel}</li><li>${obj.email}</li>`
}

describe('Testes de inserção/alteração/remoção de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Verificando a inserção de um novo contato (André Coêlho)', () => {
    const novoContato = {
      nome: 'André Coêlho',
      email: 'andre.coelho@ebac.com.br',
      tel: '+33 33 3333-3333'
    }
    const lista = retornaLista(novoContato);

    cy.get('input[type="text"]').type(novoContato.nome);
    cy.get('input[type="email"]').type(novoContato.email);
    cy.get('input[type="tel"]').type(novoContato.tel);
    cy.get('.adicionar').click();

    cy.get('.sc-eDDNvR.cTVgex').last().should('contain.html', lista);
    cy.get('.contato').should('have.length.above', 3);
  })
  
  it('Verificando a alteração de um contato existente (André Coêlho -> Rogério Dias)', () => {
    const contatoAlterado = {
      nome: 'Rogério Dias',
      email: 'rogerio.dias@ebac.com.br',
      tel: '+22 2222-2222'
    }
    const lista = retornaLista(contatoAlterado);

    cy.get('.edit').last().click();
    cy.get('input[type="text"]').clear().type(contatoAlterado.nome);
    cy.get('input[type="email"]').clear().type(contatoAlterado.email);
    cy.get('input[type="tel"]').clear().type(contatoAlterado.tel);
    cy.get('.alterar').click();

    cy.get('.sc-eDDNvR.cTVgex').last().should('contain.html', lista);
    cy.get('.contato').should('have.length.above', 3);
  })

  it('Verificando a remoção de um contato (Rogério Dias)', () => {
    const contatoARemover = {
      nome: 'Rogério Dias',
      email: 'rogerio.dias@ebac.com.br',
      tel: '+22 2222-2222'
    }
    const lista = retornaLista(contatoARemover);

    cy.get('.delete').last().click();
    cy.get('.sc-eDDNvR.cTVgex').last().should('not.contain.html', lista);
    cy.get('.contato').should('have.length', 3);
  })
})