const { test, expect } = require('@playwright/test');

test.describe('ITPM Assignment 1 – Translator Automation', () => {

  test('Pos_Fun_0001 - Output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('man gedhara yanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0002 - Output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('Subha davasak!');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0003 - Output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('oyaa ada gedhara enavaadha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_UI_0001 - Output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama panthi yanvaa.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0001 - Output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mamahetagedharayanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

});
