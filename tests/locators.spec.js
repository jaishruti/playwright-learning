import { test, expect } from "@playwright/test";

test("Locator interaction test", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  // Correct usage of locators

  // 1️⃣ Placeholder
  const searchInput1 = page.locator("#searchInput");
  await expect(searchInput1).toBeVisible();

  // 2️⃣ Test ID (Wikipedia does NOT use data-testid, so we use ID instead)
  const searchInput2 = page.getByRole("searchbox", {
    name: "Search",
  });
  await expect(searchInput2).toBeVisible();

  // 3️⃣ getByRole -> dropdown (language select)
  const languageDropdown = page.locator("#searchLanguage");
  await expect(languageDropdown).toBeVisible();

  // 4️⃣ getByText
  const textLocator = page.getByText("The Free Encyclopedia");
  await expect(textLocator).toBeVisible();

  // 5️⃣ getByRole must include a valid role → link example
  const englishLink = page.getByRole("link", { name: "English" });
  await expect(englishLink).toBeVisible();
});

test("Locator workflow test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  // Click Phones category
  await page.getByRole("link", { name: "Phones" }).click();

  // Click Samsung galaxy s6 product
  await page.getByRole("link", { name: "Samsung galaxy s6" }).click();

  // Click Add to cart
  await page.getByRole("link", { name: "Add to cart" }).click();

  // Optional: verify cart confirmation alert
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("added");
    await dialog.accept();
  });
});
