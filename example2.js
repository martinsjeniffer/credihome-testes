const puppeteer = require('puppeteer');
const iPhone6 = puppeteer.devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhone6);
  await page.goto('https://simulador.credihome.com.br/simulador/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();