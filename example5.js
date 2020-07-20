const puppeteer = require('puppeteer');
const iPhone6 = puppeteer.devices['iPhone 6'];


(async () => {
  const options = {
    headless: false,
    slowMo: 50,
    fullPage: true, 
    devtools: true,
  }

  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.emulate(iPhone6);
  await page.goto('https://simulador.credihome.com.br/simulador/');
  
  await page.click('input#realtyPrice');
  await page.type('input#realtyPrice', "100000.00");
  await page.click('input#mortgageValue');
  await page.type('input#mortgageValue', "60000.00");
  await page.click('button[type="submit"]');
  await page.click('.chicon-calendar');   
  
  await page.screenshot({ path: 'example.png' });
  
  // await browser.close();
})();