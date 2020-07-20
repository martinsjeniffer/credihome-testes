// import 'expect-puppeteer';
const puppeteer = require('puppeteer');
const iPhone5 = puppeteer.devices['iPhone 5'];
const iPhone6 = puppeteer.devices['iPhone 6'];
const iPhone8Plus = puppeteer.devices['iPhone 8 Plus'];

const app = 'https://simulador.credihome.com.br/simulador';
let browser;
let page; 

describe('WLtest', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(app);
    await page.screenshot({ path: './home.png' });
   });
  
  it('should be titled "Site CrediHome - Simulador"', async () => {
    await page.screenshot({ path: './home1.png' });
    await expect(page.title()).resolves.toMatch('Site CrediHome - Simulador');
  });

  it('should return google tag manager', async () => {     
    const tagManager = await page.evaluate(() => google_tag_manager);   
    expect(tagManager).toBeDefined();
  });

  afterAll(async () => {
    await page.close();
  })
});
