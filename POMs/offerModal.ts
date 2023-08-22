import { expect, Locator, Page} from '@playwright/test';
import { LoginEnvironments } from '../environments/loginEnvironments';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { newOfferEnvironments } from '../environments/newOfferEnvironments';

export class OfferModal {
readonly page: Page;
readonly clientField: Locator;
readonly projectField: Locator;
readonly languageField: Locator;
readonly noProjectsError: Locator;
readonly noProjectDropDown: Locator;
readonly zeroProjects: Locator;
readonly newOfferModal: Locator;
readonly oneProject: Locator;
readonly oneProjectDropDown: Locator;
readonly languageCroatian: Locator;
readonly continueButton: Locator;
readonly createNewOfferHeadline: Locator;
readonly twoProjectDropDown: Locator;
readonly testProject1: Locator;



constructor(page: Page){
    this.page = page;
    this.clientField = page.locator('div').filter({ hasText: /^ClientClientProjectProjectLanguageLanguage$/ }).getByRole('img')
    this.projectField = page.locator('div').filter({ hasText: /^Project$/ }).nth(1)
    this.languageField = page.locator('div').filter({ hasText: /^Language$/ }).nth(1)
    this.noProjectsError = page.locator('div').filter({ hasText: /^Selected client is without a project, please create a project first\.$/ }).first()
    this.noProjectDropDown = page. getByText('Automation Test Company #0 [DO NOT DELETE]', { exact: true })
    this.newOfferModal = page.getByText('Create New OfferClientClientProjectProjectLanguageLanguage Cancel Continue')
    this.oneProjectDropDown = page.getByText('Automation Test Company #1 [DO NOT DELETE]', { exact: true })
    this.languageCroatian = page.locator('#react-select-3-option-1')
    this.continueButton = page.getByRole('button', { name: 'Continue' })
    this.createNewOfferHeadline = page.getByRole('heading', { name: 'Create New Offer' })
    this.twoProjectDropDown = page.getByText('Automation Test Company #2 [DO NOT DELETE]')
    this.testProject1 = page.getByText('Automation Test Project #1 [DO NOT DELETE]', { exact: true })
}



async noProjects(){
    
    await this.clientField.click();
    await this.noProjectDropDown.click();
    await expect(this.noProjectsError).toBeVisible();
}


async clientHasOneProject(){
    
    await this.clientField.click();
    await this.oneProjectDropDown.click();
    await this.projectField.click();
    await expect(this.projectField).toBeEnabled();   
}
async clientHasOneProjectCreateOffer(){
    
    await this.clientField.click();
    await this.oneProjectDropDown.click();
    await this.languageField.click();
    await this.languageCroatian.click();
    await this.continueButton.click();
    await expect(this.createNewOfferHeadline).toBeVisible();
}
async clientHasTwoOffers(){
    await this.clientField.click();
    await this.twoProjectDropDown.click();
    await this.projectField.click();
    await this.testProject1.click()
    await this.languageField.click();
    await this.languageCroatian.click();
    await this.continueButton.click();
    await expect(this.createNewOfferHeadline).toBeVisible();

    
}
}
