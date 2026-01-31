const { test, expect } = require('@playwright/test');

async function safeGoto(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  } catch (e) {
    // quick retry once
    await page.waitForTimeout(1000);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }
}

test.describe('ITPM Assignment 1 – Translator Automation', () => {

  test('Pos_Fun_0001 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('man gedhara yanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0002 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('Subha davasak!');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0003 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('oyaa ada gedhara enavaadha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0004 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0005 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('oyaa hari, ehenam api yamu.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0006 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama sunaQQgu vunee maarga thadhabadhaya nisaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0007 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('oyaata kohomadha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0008 - Output updates automatically in real time', async ({ page }) => {
  await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('issarahata yanna');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0009 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('karuNaakaralaa eka poddak balanna puluvandha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0010 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('naee, mata eeka karanna puLuvan.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0011 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('oyaata puLuvandha karuNaakara eyaava ekkan enna? ');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0012 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('adoo, araka aran dhiyan');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0013 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mata adha hodatama mahansiyi. heta homework tika karamudha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0014 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama adha gedhara innee.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0015 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('api 2026-02-01 trip ekata yamudha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0016 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mata iiye paasal yanna baeri vunaa.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0017 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama heta campus yanna inne.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0018 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama dhaen kaeema hadhanavaa, oyath enna kaeema hadhanna.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0019 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mata adha gedhara inna vunee.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0020 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('machan adha supiri dhavasak!');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0021 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mata haal 2kg ganna oone, ganna puLuvandha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0022 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('Api bath kanna eLiyata yamudha?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0023 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('hari hari, maQQ dhaen ennam.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0024 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('karunakaralaa, magei report eka adha evening venakota review karala feedback ekak dhenna. mata eeka heta submit karanna thiyena nisaa accuracy eka hariyata balanna oonee. ');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_Fun_0025 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama gedhara yanavaa.oyaa enavadha maath ekka yanna?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Pos_UI_0001 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama panthi yanvaa.');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0001 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mamahetagedharayanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0002 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('maamaa hetaaa yanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0003 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('meeka???wearadi!!!??');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0004 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mama  bath   kanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0005 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('kg2 ml500 mata dhenna');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0006 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('ado machan hariyata karana dhee karannko bro');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0007 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('zoommeeting eka thiyanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0008 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('karunakaralaa magei report eka adha evening venakota review karala feedback ekak dhenna. mata eeka heta submit karanna thiyena nisaa accuracy eka hariyata balanna oonee. ');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0009 - Output updates automatically in real time', async ({ page }) => {
    await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('oyaata kohomadaaaa?');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });

  test('Neg_Fun_0010 - Output updates automatically in real time', async ({ page }) => {
   await safeGoto(page, 'https://www.swifttranslator.com/');

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

    await inputBox.fill('mamabathkanavaa');

    //Robust UI validation: Sinhala output appears automatically
    await expect(page.locator('body')).toContainText(/[\u0D80-\u0DFF]{3,}/, { timeout: 15000 });
  });


});
