import { test, expect } from '@playwright/test';
import { LoginPage} from '../../POMs/loginPage'; 
import { LoginEnvironments } from '../../environments/loginEnvironments';
import { HomePage } from '../../POMs/homePage';
import { OfferModal } from '../../POMs/offerModal';


test('no-project',async ({page}) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();

    const offerModal = new OfferModal (page);
    await offerModal.noProjects();
    

});

test('one-project-disabled-project-field', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    await offerModal.clientHasOneProject();
});

test('one-project-create-offer', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    await offerModal.clientHasOneProjectCreateOffer();
});

test('two-project-create-offer', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.succesfulLogin();
    
    const homePage = new HomePage (page);
    await homePage.newOfferButton.click();
    
    const offerModal = new OfferModal (page);
    await offerModal.clientHasTwoOffers();
});





