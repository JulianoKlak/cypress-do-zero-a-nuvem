describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'
    cy.visit('./src/index.html')
    cy.get('#firstName').type('Juliano')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('teste@teste.com.br')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.visit('./src/index.html')
    cy.get('#firstName').type('Juliano')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('teste@teste,com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

})