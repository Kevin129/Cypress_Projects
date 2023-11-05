/// <reference types="cypress"/>

describe("E2E = Produkty", () => {
    it("Check GD2", ()=> {
        cy.visit("https://www.greendrains.pl/");
    
        //Kliknijv,,Produkty"
    cy.contains("Produkty").click();

    //Sprawdź czy grafika GD2 istnieje na stronie
    cy.get('img[src="https://www.greendrains.pl/wp-content/uploads/2022/06/GD2-1.png"]')
            .should('be.visible');

    // Sprawdź, czy nazwa modelu GD2 istnieje na stronie
    cy.get('h3.elementor-image-box-title')
            .should('be.visible')
            .and('contain', 'GD2');

    cy.get('p.elementor-image-box-description')
            .should('be.visible')
            .and('contain', 'Ø=50-58 mm');

    })
})

    it("Check GD3", ()=> {
        cy.visit("https://www.greendrains.pl/");

    //Sprawdź czy grafika GD2 istnieje na stronie
    cy.get('img[src="https://www.greendrains.pl/wp-content/uploads/2022/06/GD3-1.png"]')
    .should('be.visible');

    // Sprawdź, czy nazwa modelu GD2 istnieje na stronie
    cy.get('h3.elementor-image-box-title')
            .should('be.visible')
            .and('contain', 'GD3');

    cy.get('p.elementor-image-box-description')
            .should('be.visible')
            .and('contain', 'Ø=75-85 mm');
    
})

it("Check GD35", ()=> {
    cy.visit("https://www.greendrains.pl/");

//Sprawdź czy grafika GD2 istnieje na stronie
cy.get('img[src="https://www.greendrains.pl/wp-content/uploads/2022/06/GD35-1.png"]')
.should('be.visible');

// Sprawdź, czy nazwa modelu GD2 istnieje na stronie
cy.get('h3.elementor-image-box-title')
        .should('be.visible')
        .and('contain', 'GD35');

cy.get('p.elementor-image-box-description')
        .should('be.visible')
        .and('contain', 'Ø=89-100 mm');

})
it("Check GD4", ()=> {
    cy.visit("https://www.greendrains.pl/");

//Sprawdź czy grafika GD2 istnieje na stronie
cy.get('img[src="https://www.greendrains.pl/wp-content/uploads/2022/06/GD4-1.png"]')
.should('be.visible');

// Sprawdź, czy nazwa modelu GD2 istnieje na stronie
cy.get('h3.elementor-image-box-title')
        .should('be.visible')
        .and('contain', 'GD4');

cy.get('p.elementor-image-box-description')
        .should('be.visible')
        .and('contain', 'Ø=102-110 mm');

})

it("Check GD5", ()=> {
    cy.visit("https://www.greendrains.pl/");

//Sprawdź czy grafika GD2 istnieje na stronie
cy.get('img[src="https://www.greendrains.pl/wp-content/uploads/2022/06/GD5.png"]')
.should('be.visible');

// Sprawdź, czy nazwa modelu GD2 istnieje na stronie
cy.get('h3.elementor-image-box-title')
        .should('be.visible')
        .and('contain', 'GD5');

cy.get('p.elementor-image-box-description')
        .should('be.visible')
        .and('contain', 'Ø=120-135 mm');

})