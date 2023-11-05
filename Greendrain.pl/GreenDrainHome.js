/// <reference types="cypress"/>

describe("E2E = Home Page", () => {
    it("Click Home", () =>{
        cy.visit("https://www.greendrains.pl/");

        //Click Home
        cy.contains('[class="elementor-item"]','Produkty').click();
        cy.contains('[class="elementor-item"]','Home').click();

        cy.contains("GREEN DRAIN -system wpustów podłogowych").should("be.visible");
    })     
})
    it("Click Home", () =>{
        cy.visit("https://www.greendrains.pl/");

        //Click Image
        cy.contains('[class="elementor-item"]','Produkty').click();

        cy.get('[src="https://www.greendrains.pl/wp-content/uploads/2022/06/cropped-Mailsignatur_-Green-Drain_Poland-mniejszy-dwa-1-2.jpg"]').click();

        cy.contains("GREEN DRAIN -system wpustów podłogowych").should("be.visible");
        
    })