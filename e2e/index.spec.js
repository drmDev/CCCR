import { test, expect } from '@playwright/test';
const { IndexPage } = require('./pages/IndexPage');

test.describe('Index component tests', () => {

    let indexPage;

    test.beforeEach(async ( { page }) => {
        indexPage = new IndexPage(page);
        await page.goto('');
    });

    test('should display warning note', async () => {
        await expect(indexPage.alertWarning).toBeVisible();
        await expect(indexPage.alertWarning).toContainText('This is an unofficial site');
    });

    test('should display the strawpoll for time control', async () => {
        await expect(indexPage.strawpollTimeControl).toBeVisible();
    });

    test('should have chess icons in the header', async ({ page }) => {
        // Since these don't have data-testid, we'll use a more general selector
        const chessIcons = page.locator('.fa-chess');
        await expect(chessIcons).toHaveCount(3);
    });
});
