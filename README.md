<h1 align="center">Welcome to text-config-typescript 👋</h1>
<p align="center">
<p align="center">
  <img src="https://img.shields.io/npm/v/typescript-text-config.svg?orange=blue" />
  <a href="https://www.npmjs.com/package/typescript-text-config">
    <img alt="downloads" src="https://img.shields.io/npm/dm/readme-md-generator.svg?color=blue" target="_blank" />
  </a>
  
  
  
</p>
# to install it
```bash
npm i typescript-text-config
```

# text-config-typescript
its typescript mini libary for parsing data config from text file 

to use it :
# first create text file
exemple create test.text
> a = 5 b = 45


# second import text-config-typescript package
```javascript
const textconfig = require('typescript-text-config');
var file = new textconfig.TextConfig('test.txt');
console.log(file.getItem('a'));
// output : 5
```
