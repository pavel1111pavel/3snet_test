//страница открывается? нет ли ошибок? сриншотный тест?
import { test, expect } from '@playwright/test';
import { EventsWidgetPage } from '../../pages/EventWidgetPage';

test.describe.skip('Visible test', () => {

    test('Event Page Response 200', async ({page}) => {
        const eventsWidgetPage = new EventsWidgetPage(page)
        await eventsWidgetPage.open()
        await eventsWidgetPage.waitForLoad()

        const response = await eventsWidgetPage.responseOK();
        expect(response).toBeTruthy();

    })

    test('Event Page Loading', async ({page}) => {

        const eventsWidgetPage = new EventsWidgetPage(page)
        await eventsWidgetPage.open()
        await eventsWidgetPage.waitForLoad()

        const isLoad = await eventsWidgetPage.isLoaded()
        expect(isLoad).toBeTruthy()

        await eventsWidgetPage.makeScreenshot()


    })

    // test('simple access test', async ({ page }) => {
    //     console.log('BASE_URL:', process.env.BASE_URL);
        
    //     // Используем domcontentloaded вместо load
    //     const response = await page.goto('/', { 
    //         waitUntil: 'domcontentloaded',
    //         timeout: 30000 
    //     });
        
    //     console.log('Response status:', response?.status());
        
    //     // Ждем появления body (страница точно открылась)
    //     await page.waitForSelector('body', { timeout: 10000 });
        
    //     // Делаем скриншот главной страницы
    //     await page.screenshot({ path: 'test-results/main-page.png' });
        
    //     expect(response?.ok()).toBeTruthy();
    // });

    // test('debug page load', async ({ page }) => {
    //     // Тест для отладки проблем загрузки
    //     page.on('console', msg => console.log('Browser console:', msg.text()));
    //     page.on('pageerror', error => console.log('Page error:', error));
        
    //     await page.goto('/', { waitUntil: 'commit' });
    //     await page.waitForTimeout(5000);
        
    //     // Проверим, что есть какой-то контент
    //     const bodyContent = await page.textContent('body');
    //     console.log('Body content length:', bodyContent?.length);
        
    //     // Проверим заголовок
    //     const title = await page.title();
    //     console.log('Page title:', title);
    // });
    
}) 