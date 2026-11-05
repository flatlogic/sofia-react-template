const { test, expect } = require('@playwright/test');

test('login, dashboard, tables, charts and logout work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error.message); });
  await page.goto('./');
  await expect(page.getByPlaceholder('Email', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page).toHaveURL(/#\/template\/dashboard$/);
  await expect(page.locator('main .apexcharts-canvas svg').first()).toBeVisible();
  await expect(page.locator('main .apexcharts-bar-area').first()).toBeVisible();
  await page.screenshot({ path: 'test-results/dashboard.png', fullPage: true });
  await page.locator('a[href="#/template/tables"]').click();
  await expect(page.locator('main table tbody tr').first()).toBeVisible();
  await page.locator('a[href="#/template/typography"]').click();
  await expect(page.locator('main')).toContainText('Typography');
  await page.goto('./#/template/ui-elements/charts');
  await expect(page.locator('main .apexcharts-canvas svg').first()).toBeVisible();
  await expect(page.locator('main .recharts-pie-sector path').first()).toBeVisible();
  await page.getByRole('link', { name: /Christina Carey/ }).click();
  await page.getByRole('button', { name: /Logout/ }).click();
  await expect(page.getByPlaceholder('Email', { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});
