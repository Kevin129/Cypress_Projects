/// <reference types="cypress"/>

describe("E2E = Home Page", () => {
    it("Click element", ()=> {
        cy.visit("https://www.greendrains.pl/");

        cy.contains('[class="elementor-item"]','Kontakt').click();

        //imie
        cy.get("#form-field-name").type("Jan Kowalski");

        //email
        cy.get("#form-field-email").type("jan700460@gmail.com");

        //wiadomość
        cy.get("#form-field-message").type("Dzień dobry,{enter}to moja testowa wiadomość.");

        //Kliknij wyślij
        cy.get(".elementor-button-text").click();

        //Sprawdź komunikat po wysłaniu
        cy.contains("Wysyłanie formularza zakończone sukcesem.").should("be.visible");

    })
})