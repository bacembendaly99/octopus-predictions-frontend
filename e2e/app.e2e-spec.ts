import {browser, by, element} from 'protractor';

function getWorldCupButton() {
    const button = element.all(by.css('world-cup'));
    return button;
}

function getTitle() {
    const title = element.all(by.css('title'));
    return title;
}

describe('Protractor Testing', function () {

    beforeAll(() => browser.get('http://localhost:4200/home'));


    it('check the page title', function () {
        browser.driver.getTitle().then(function (pageTitle) {
            expect(pageTitle).toEqual('Octopus Predictions');
        });
    });


    it('has world cup button', () => {
        const button = getWorldCupButton();
        expect(button.innerHTML).toBe('World Cup');

        expect(button).toBeTruthy();
    });

    it('redirect to world cup page', () => {
        const button = getWorldCupButton();
        button.click();
        browser.sleep(3000);
        const title = getTitle();
        expect(title.innerHTML).toBe('World-cup');
    });


});
