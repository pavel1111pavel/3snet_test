import { EventsWidgetPage } from "../../pages/EventWidgetPage"
import { test, expect } from '@playwright/test'

// наличие элементов, текст, 
test.describe.skip('Events Widget - UI Tests', () => {
    
    test('H1 Title Visible', async ({page}) => {
        const eventsWidgetPage = new EventsWidgetPage(page)

        await eventsWidgetPage.open()
        await eventsWidgetPage.waitForLoad()

        const titleText = await eventsWidgetPage.getWrapperTitle()
        expect(titleText).toContain('календарь мероприятий')
        await eventsWidgetPage.makeScreenshotElement(titleText)

    })

    test('Constructor Visible', async ({page}) => {
        const eventsWidgetPage = new EventsWidgetPage(page)
        const constructorTable = eventsWidgetPage.constructorTable
        expect(eventsWidgetPage.waitForConstructorTable)
        await eventsWidgetPage.makeScreenshotElement()

    })
})