/// <reference types="cypress"/>

describe("E2E = Video", () => {
    it.only("Check elements", ()=> {
        cy.visit("https://www.greendrains.pl/")

        cy.contains("Prezentacja video").click();

        cy.get('h2.elementor-heading-title')
            .sholud('be.visible')
            .and('contain', 'Poznaj nasz produkt')
    })
})
    it("Check Video 1", ()=> {
        cy.visit("https://www.greendrains.pl/")


        cy.get('h2.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'Video ')

        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Green-Drain-Protecting-Against-Pathogens-Odor-Gases-and-Bugs-2.mp4"]')
            .should('be.visible')
            .then(($video) => {
                // Odtwórz wideo
                $video[0].play();

        // Poczekaj 5 sekund
        cy.wait(5000);
    
        // Zatrzymaj wideo
        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Green-Drain-Protecting-Against-Pathogens-Odor-Gases-and-Bugs-2.mp4"]')
            .then(($video) => {
                $video[0].pause();

        cy.get('h6.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'Poznaj system green drain');
        })
    })
})