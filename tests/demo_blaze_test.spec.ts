import { test, expect } from "@playwright/test";
import { DemoblazeHome } from "../pages/DemoblazeHome";

test.describe("Feature: sign Up", () => {

    let demoBlazePage : DemoblazeHome;

    test.beforeEach(async({ page }) => {
        demoBlazePage = new DemoblazeHome(page);
        await demoBlazePage.goto();
    })

    test('successfully sign up', async({page}) =>{
        await demoBlazePage.doSignUp("prueba", "prueba");
    })

})

test.describe("Feature: Login", () => {

    let demoBlazePage : DemoblazeHome;

    test.beforeEach(async({ page }) => {
        demoBlazePage = new DemoblazeHome(page);
        await demoBlazePage.goto();
    })

    test('successfully login', async({page}) =>{
        await demoBlazePage.doLogin("prueba", "prueba");
        await expect(page.getByRole('link', { name: 'Welcome prueba' })).toBeVisible();
    })

    test('successfully log out', async({page}) =>{
        await demoBlazePage.doLogin("prueba", "prueba");
        await demoBlazePage.doLogOut();
        await expect(page.getByRole('link', { name: 'Welcome prueba' })).toBeHidden();
    })

})

test.describe("Feature: add cart and buy", () => {

    let demoBlazePage : DemoblazeHome;

    test.beforeEach(async({ page }) => {
        demoBlazePage = new DemoblazeHome(page);
        await demoBlazePage.goto();
    })

    test('add elements to cart', async({page}) =>{
        await demoBlazePage.doLogin("prueba", "prueba");
        await demoBlazePage.addToCart();
        await demoBlazePage.gotoCart();

        await expect(page.locator('body')).toContainText('Thank you for your purchase!');
        await expect(page.locator('.sa-placeholder')).toBeVisible();
    })
})