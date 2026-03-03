//клики, ховеры, фильтры

import test, { expect } from "@playwright/test"
import { EventsWidgetPage } from "../../pages/EventWidgetPage"

test.describe('Event Widget - Interaction Test', () => { 
    test('Step 1 - Check Theme', async ({page}) => {
        const eventsWidgetPage = new EventsWidgetPage(page)
        await eventsWidgetPage.open()
        await eventsWidgetPage.waitForLoad()

        await expect(eventsWidgetPage.checkSelect.first()).toBeVisible();
        await eventsWidgetPage.makeScreenshot();
    })   
})