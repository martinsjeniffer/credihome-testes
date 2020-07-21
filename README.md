# Testes no front end com Puppeteer e Jest

<p align="center">
<img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/full/jestlogo.png" height="200px"><img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" margin="0 30px" height="200px">
</p>

Esses testes têm como objetivo introduzir o tópido de **testes E2E** (ou **UI Testing**) com [puppeteer](https://github.com/puppeteer/puppeteer) e [jest](https://github.com/facebook/jest).

primeiro, clone o repositório, instale a versão mais atualizada no node.js e do yarn e depois rode:

  ```
  yarn add puppeteer
  ```

  ```
  yarn add --dev jest
  ```
  
  ```
  yarn add jest-puppeteer-preset
  ```
  
  

_se assegure de que o puppeter baixou o Chrome/Chromium._


para rodar os exemplos com o puppeter, rode dentro do repositório:

  ```
  node example<num do exemplo desejado>.js
  ```

para rodar o teste [jest-puppeter](https://github.com/smooth-code/jest-puppeteer) rode:

  ```
  yarn test -t -WLtest
  ```
