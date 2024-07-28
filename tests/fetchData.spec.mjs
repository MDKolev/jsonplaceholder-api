import { expect, test } from '@playwright/test';

test.describe('FetchData Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test("should display homepage title", async ({ page }) => {
    await expect(page.locator('text=JSONPlaceholder API')).toBeVisible();
  })

  test('should display loading state and fetch users successfully', async ({ page }) => {
    await page.click('button.fetch-button');

    await expect(page.locator('text=Loading data')).toBeVisible();
    await page.waitForSelector('.loading-image', { state: 'visible' });
    await page.waitForSelector('.loading-image', { state: 'hidden' });

    await page.waitForSelector('table tbody tr');

    const rows = await page.locator('table tbody tr');
    const rowCount = await rows.count();

    expect(rowCount).toBeGreaterThan(0);

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const name = await row.locator('td').nth(0).innerText();
      const username = await row.locator('td').nth(1).innerText();
      const email = await row.locator('td').nth(2).innerText();

      expect(name).not.toBe('');
      expect(username).not.toBe('');
      expect(email).not.toBe('');
    }

    await expect(page.locator('text=Users fetched successfully')).toBeVisible();
  })
});