import { expect, type Locator, type Page } from "@playwright/test";

export class DemoblazeHome {

    readonly page: Page;
    readonly signUpButton: Locator;
    readonly loginButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.signUpButton = page.getByRole('link', { name: 'Sign up' })
        this.loginButton = page.getByRole('link', { name: 'Log in' })
    }
    async goto(){
        await this.page.goto('https://www.demoblaze.com/');
    }

    async doSignUp(user : string, password : string){
        await this.signUpButton.click();
        await this.page.getByLabel('Username:').click();
        await this.page.getByLabel('Username:').fill(user);
        await this.page.getByLabel('Password:').click();
        await this.page.getByLabel('Password:').fill(password );
        this.page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);//Sign up successful.
          expect(dialog.message).toStrictEqual("Sign up successful.");
          dialog.dismiss().catch(() => {});
        });
    }

    async doLogin(user : string, password : string){
        await this.loginButton.click();
        await this.page.locator('#loginusername').click();
        await this.page.locator('#loginusername').fill('prueba');
        await this.page.locator('#loginpassword').click();
        await this.page.locator('#loginpassword').fill('prueba');
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }

    async doLogOut(){
        await this.page.getByRole('link', { name: 'Log out' }).click();
    }

    async addToCart(){
        await this.page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.page.getByRole('link', { name: 'Home (current)' }).click();
        await this.page.getByRole('link', { name: 'Nokia lumia' }).click();
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.page.getByRole('link', { name: 'Home (current)' }).click();
        await this.page.getByRole('link', { name: 'Nexus' }).click();
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.page.getByRole('link', { name: 'Home (current)' }).click();
        await this.page.getByRole('link', { name: 'Samsung galaxy s7' }).click();
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.page.getByRole('link', { name: 'Home (current)' }).click();
        await this.page.getByRole('link', { name: 'Iphone 6 32gb' }).click();
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
          await this.page.getByRole('link', { name: 'Home (current)' }).click();
    }

    async gotoCart(){
      await this.page.getByRole('link', { name: 'Cart' }).click();
      await this.page.getByRole('button', { name: 'Place Order' }).click();
      await this.page.getByLabel('Total:').click();
      await this.page.getByLabel('Total:').fill('david');
      await this.page.getByLabel('Country:').click();
      await this.page.getByLabel('Country:').fill('colombia');
      await this.page.getByLabel('City:').click();
      await this.page.getByLabel('City:').fill('medellin');
      await this.page.getByLabel('Credit card:').click();
      await this.page.getByLabel('Credit card:').fill('4242424242424242');
      await this.page.getByLabel('Month:').click();
      await this.page.getByLabel('Month:').fill('01');
      await this.page.getByLabel('Year:').click();
      await this.page.getByLabel('Year:').fill('26');
      await this.page.getByRole('button', { name: 'Purchase' }).click();
    }
}