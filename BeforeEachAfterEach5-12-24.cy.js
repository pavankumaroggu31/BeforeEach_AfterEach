describe('BeforeEach AfterEach', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    afterEach(() => {
        cy.clearCookies(); 
    });

   
    it('login', () => {
        cy.contains(' Login')
          .should('be.visible'); 
    });

    it('email ', () => {
        cy.get('[name="username"]')
          .should('contain', 'Enter your email');
    });
});