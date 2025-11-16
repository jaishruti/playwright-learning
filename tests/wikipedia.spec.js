import { test, expect } from "@playwright/test";

test("Wikipedia Search Test", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");
  await page.locator("#searchInput").fill("Selenium (software)");

  await page.locator("button[type='submit']").click();

  await expect(page).toHaveTitle(/Selenium/);
});

test("Wikipedia Search Playwright Test", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");
  await page.locator("#searchInput").fill("Playwright");

  await page.locator("button[type='submit']").click();
  await expect(page).toHaveTitle(/Playwright/);
});
