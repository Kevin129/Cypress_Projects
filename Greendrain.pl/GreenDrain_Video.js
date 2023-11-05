/// <reference types="cypress"/>

describe("E2E = Video", () => {
    it("Check elements", ()=> {
        cy.visit("https://www.greendrains.pl/")

        cy.contains("Prezentacja video").click();
        
        //Czy tekst ,,POZNAJ NASZ PRODUKT" istnieje na stronie
        cy.get('h2.elementor-heading-title')
        .should('be.visible')
        .and('contain', 'Poznaj nasz produkt')

        //Czy tytuł ,,VIDEO" istnieje na stronie
        cy.get('h2.elementor-heading-title')
        .should('be.visible')
        .and('contain', 'Video ')

        
    })
})
    it("Check Video 1", ()=> {
        cy.visit("https://www.greendrains.pl/prezentacja-video/")

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
        
        //Spradź czy tytuł istnieje na stronie
        cy.get('h6.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'Poznaj system green drain');
        })
    })
})
    it("Check Video 2", ()=> {
        cy.visit("https://www.greendrains.pl/prezentacja-video/")

        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Green-Drain-Pathogen-Blocking-Technology-2.mp4"]')
            .should('be.visible')
            .then(($video) => {
                // Odtwórz wideo
                $video[0].play();

        // Poczekaj 5 sekund
        cy.wait(5000);
    
        // Zatrzymaj wideo
        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Green-Drain-Pathogen-Blocking-Technology-2.mp4"]')
            .then(($video) => {
                $video[0].pause();

        //Spradź czy tytuł istnieje na stronie
        cy.get('h6.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'GreenDrain w obiektach');
        })
    })
})
    it("Check Video 3", ()=> {
        cy.visit("https://www.greendrains.pl/prezentacja-video/")

        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Green-Drain-Sustainable-Drain-Technology.mp4"]')
            .should('be.visible')
            .then(($video) => {
                // Odtwórz wideo
                $video[0].play();

        // Poczekaj 5 sekund
        cy.wait(5000);

        // Zatrzymaj wideo
        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Green-Drain-Sustainable-Drain-Technology.mp4"]')
            .then(($video) => {
                $video[0].pause();

        //Spradź czy tytuł istnieje na stronie
        cy.get('h6.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'technologia drenażu green drain');
        })
    })
})
    it("Check Video 4", ()=> {
        cy.visit("https://www.greendrains.pl/prezentacja-video/")

        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Why-EVERY-RESTAURANT-NEEDS-A...-2.mp4"]')
            .should('be.visible')
            .then(($video) => {
                // Odtwórz wideo
                $video[0].play();

        // Poczekaj 5 sekund
        cy.wait(5000);

        // Zatrzymaj wideo
        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/Why-EVERY-RESTAURANT-NEEDS-A...-2.mp4"]')
            .then(($video) => {
                $video[0].pause();

        //Spradź czy tytuł istnieje na stronie
        cy.get('h6.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'Green drain  w restauracjach');
        
        })
    })
})
    it("Check Video 5", ()=> {
        cy.visit("https://www.greendrains.pl/prezentacja-video/")

        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/How-to-Install-a-Green-Drain-Waterless-Trap-Seal-for-Floor-Drains-2.mp4"]')
            .should('be.visible')
            .then(($video) => {
                // Odtwórz wideo
                $video[0].play();

        // Poczekaj 5 sekund
        cy.wait(5000);

        // Zatrzymaj wideo
        cy.get('video[src="https://www.greendrains.pl/wp-content/uploads/2022/06/How-to-Install-a-Green-Drain-Waterless-Trap-Seal-for-Floor-Drains-2.mp4"]')
            .then(($video) => {
                $video[0].pause();

        //Spradź czy tytuł istnieje na stronie
        cy.get('h6.elementor-heading-title')
            .should('be.visible')
            .and('contain', 'Instalacja green drain');
        })
    })
})