const puppeteer = require('puppeteer');
const iPhone6 = puppeteer.devices['iPhone 6'];

(async () => {
  const options = {
    headless: false,
    slowMo: 50,
    fullPage: true, 
    devtools: true,
  }

  const data = {
    name: 'Puppeteer test',
    cpf: '309.631.700-31',
    dataNascimento: '20/01/2000',
    email: 'teste@teste.com',
    tel: '11 11111-1111',
    purchaseTime: 'purchaseTime_thirtyDays',
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

  await page.click('input#name');
  await page.type('input#name', data.name);

  await page.click('input#cpf');
  await page.type('input#cpf', data.cpf); 

  await page.click('input#dateOfBirth');
  await page.type('input#dateOfBirth', data.dataNascimento);

  await page.click('.chicon-calendar');
  await page.click('.chicon-calendar'); 

  await page.click('input#email');
  await page.type('input#email', data.email);

  await page.click('input#phone');
  await page.type('input#phone', data.tel);

  await page.click('button[type="submit"]');

  await page.click(`label[for=${data.purchaseTime}]`);  

  await page.click('button[type="submit"]');
  
  await page.screenshot({ path: 'example.png' });
  
  // await browser.close();
})();