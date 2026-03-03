import { Page, Locator, test } from '@playwright/test'
import  * as Urls from '../core/constants/urls';
import  * as Time from '../core/constants/time';

export class EventsWidgetPage {
    private readonly page: Page

    readonly container: Locator
    readonly constructorTable: Locator
    readonly constructorPreview: Locator
    readonly emptyState: Locator
    readonly textArea: Locator
    readonly checkSelect: Locator

    constructor(page: Page) {
        this.page = page

        this.container = page.locator('.wrapper')
        this.constructorTable = page.locator('.constructor')
        this.constructorPreview= page.locator('.constructor__preview')
        this.emptyState = page.locator('.checkselect-over, .input')
        this.textArea = page.locator('textarea.input') 
        this.checkSelect = page.locator('.checkselect-over')
    }

    async open(path: string = '/'): Promise<void> {
        const url = Urls.EVENTS_WIDGET
        await this.page.goto(url, {waitUntil: 'commit'})
    }

    async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded')

        await this.container.waitFor({ state: "visible", timeout: Time.VISIBLE_TIME_CONTAINER })
    }

    async responseOK(path: string = '/'): Promise<boolean> {
        const url = Urls.EVENTS_WIDGET
        const response = await this.page.goto(url, {waitUntil: 'commit'})

        return response?.ok() ?? false;
    }

    async isLoaded(): Promise<boolean> {
        return this.container.isVisible()
    }

    async getConstructorTable(): Promise<string | null> {
        
    }
    
    async getWrapperTitle(): Promise<string | null> {
        const WrapperTitle = await this.page.locator('h1.text-md').textContent()
        return WrapperTitle;
    }

    async waitForConstructorTable(): Promise<void> {
        await this.constructorTable.waitFor({ state: 'visible', timeout: Time.VISIBLE_TIME_CONTAINER 
        })    
    }

    async checkSelectTheme(): Promise<string | null> {
        await this.checkSelect.first().isVisible()
        await this.checkSelect.first().click();
        await this.page.getByText('Blockchain').click();
        await this.checkSelect.first().click();
        await this.page.waitForTimeout(5000);

    }

    async clickByRole(role: any, options?: {name?: string }): Promise<void> {
        await this.page.getByRole(role, options).click();
    }

    async clickByLabel(label: string): Promise<void> {
        await this.page.getByLabel(label).click();
    }




    async makeScreenshot(): Promise<void> {
        const testInfo = test.info();
        const testName = testInfo.title;
        await this.page.screenshot({path: `screenshots/${testName}.png`, fullPage:true, timeout: Time.TIME_SCREENSHOT})
    }

    async makeScreenshotElement(element: Locator): Promise<void> {
        const testInfo = test.info();
        const testName = testInfo.title;
        await element.screenshot({path:`screenshots/${testName}.png`, timeout: Time.TIME_SCREENSHOT })
        
    }



}