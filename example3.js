const puppeteer = require('puppeteer');
const iPhone5 = puppeteer.devices['iPhone 5'];
const iPhone6 = puppeteer.devices['iPhone 6'];
const iPhone8Plus = puppeteer.devices['iPhone 8 Plus'];

const allDevices = [iPhone5, iPhone6, iPhone8Plus];

(async () => {
  const browser = await puppeteer.launch();
  
  for (const device in allDevices) {
    const page = await browser.newPage();
    await page.emulate(allDevices[device]);
    await page.goto('https://simulador.credihome.com.br/simulador/');

    await page.screenshot({ 
      path: `WL${allDevices[device].name}.png`
    });

    await page.close();
  }
  await browser.close();
})();