import { test, expect } from "@playwright/test";

test.describe("ClaimPilot Happy Path", () => {
  test("home page loads with project overview", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("text=ClaimPilot").first()).toBeVisible();
    await expect(page.locator("text=Try the Demo")).toBeVisible();
    await expect(page.locator("text=View Dashboard")).toBeVisible();
    await expect(
      page.locator("text=Claims Triage Is a Bottleneck")
    ).toBeVisible();
  });

  test("demo page loads with intake form", async ({ page }) => {
    await page.goto("/demo");

    await expect(page.locator("text=Claims Triage")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Submit a Claim" })
    ).toBeVisible();
    await expect(page.locator("#claimantName")).toBeVisible();
    await expect(page.locator("#description")).toBeVisible();
    await expect(
      page.locator("button", { hasText: "Submit Claim for Triage" })
    ).toBeVisible();
  });

  test("sample claim loader populates the form", async ({ page }) => {
    await page.goto("/demo");

    // Open the sample claim dropdown and select CLM-001
    await page.locator("text=Select a sample claim").click();
    await page.locator("text=CLM-001").click();

    // Verify form fields are populated
    await expect(page.locator("#claimantName")).toHaveValue("James Mitchell");
    await expect(page.locator("#description")).toHaveValue(/rear-ended/i);
  });

  test("dashboard loads with summary cards and charts", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page.locator("text=Analytics Dashboard")).toBeVisible();

    // Summary cards
    await expect(page.locator("text=Total Claims")).toBeVisible();
    await expect(page.locator("text=Avg Triage Time")).toBeVisible();
    await expect(page.locator("text=Fraud Flag Rate")).toBeVisible();
    await expect(page.locator("text=Auto-Resolution")).toBeVisible();

    // Charts
    await expect(page.locator("text=Claims by Type")).toBeVisible();
    await expect(page.locator("text=Severity Distribution")).toBeVisible();
    await expect(page.locator("text=Resolution Outcomes")).toBeVisible();
    await expect(page.locator("text=Fraud Risk Distribution")).toBeVisible();

    // Claims table
    await expect(page.locator("text=Recent Claims")).toBeVisible();
    await expect(page.locator("text=CLM-001")).toBeVisible();
  });

  test("navigation between pages works", async ({ page }) => {
    await page.goto("/");

    // Navigate to demo
    await page.locator("nav >> text=Try Demo").click();
    await expect(page).toHaveURL("/demo");
    await expect(page.locator("text=Claims Triage")).toBeVisible();

    // Navigate to dashboard
    await page.locator("nav >> text=Dashboard").click();
    await expect(page).toHaveURL("/dashboard");
    await expect(page.locator("text=Analytics Dashboard")).toBeVisible();
  });

  test("header and footer are present on all pages", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=ClaimPilot").first()).toBeVisible();
    await expect(page.locator("text=Built by Marcelo Otero")).toBeVisible();

    await page.goto("/demo");
    await expect(page.locator("text=ClaimPilot").first()).toBeVisible();
    await expect(page.locator("text=Built by Marcelo Otero")).toBeVisible();

    await page.goto("/dashboard");
    await expect(page.locator("text=ClaimPilot").first()).toBeVisible();
    await expect(page.locator("text=Built by Marcelo Otero")).toBeVisible();
  });
});
