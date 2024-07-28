import { expect, test } from '@playwright/test';

test.describe('FetchData Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test("should display homepage title", async({page}) => {
    await expect(page.locator('text=JSONPlaceholder API')).toBeVisible();
  })
});