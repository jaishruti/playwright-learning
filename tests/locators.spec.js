import { test, expect } from "@playwright/test";

test("Locator interaction test", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");

  // Correct usage of locators

  // 1️⃣ Placeholder 
  const searchInput1 = page.getByPlaceholder("Search Wikipedia");
  await expect(searchInput1).toBeVisible();

  // 2️⃣ Test ID (Wikipedia does NOT use data-testid, so we use ID instead)
  const searchInput2 = page.getByRole("searchbox", { name: "Search Wikipedia" });
  await expect(searchInput2).toBeVisible();

  // 3️⃣ getByRole -> dropdown (language select)
  const languageDropdown = page.getByRole("combobox", { name: "Language" });
  await expect(languageDropdown).toBeVisible();

  // 4️⃣ getByText
  const textLocator = page.getByText("The Free Encyclopedia");
  await expect(textLocator).toBeVisible();

  // 5️⃣ getByRole must include a valid role → link example
  const englishLink = page.getByRole("link", { name: "English" });
  await expect(englishLink).toBeVisible();
});
