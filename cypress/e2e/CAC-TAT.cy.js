describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
  cy.visit('./src/index.html')
  cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'
    cy.visit('./src/index.html')
    cy.get('#firstName').type('Juliano')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('teste@teste.com.br')
    
  })

})