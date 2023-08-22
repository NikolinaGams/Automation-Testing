import { Page } from '@playwright/test';


export class newOfferEnvironments {
page: Page;
noProjects: string;
oneProject: string;
twoProjects: string;
createNewOffer: string;



constructor(page: Page){
this.page = page;
this.noProjects = 'Automation Test Company #0 [DO NOT DELETE]';
this.oneProject = 'Automation Test Company #1 [DO NOT DELETE]';
this.twoProjects = 'Automation Test Company #2 [DO NOT DELETE]';
this.createNewOffer = 'Create New Offer';
}
}
