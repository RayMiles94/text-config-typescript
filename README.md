<h1 align="center">Welcome to text-config-typescript 👋</h1>
<p align="center">
<p align="center">
	<a href="https://www.npmjs.com/package/typescript-text-config" target="_blank">
  <img src="https://img.shields.io/npm/v/typescript-text-config.svg?orange=blue" />
		</a>
  <a href="https://www.npmjs.com/package/typescript-text-config" target="_blank">
    <img alt="downloads" src="https://img.shields.io/npm/dm/readme-md-generator.svg?color=blue" target="_blank" />
  </a>
  <a href="https://www.jsdelivr.com/package/npm/typescript-text-config" target="_blank">
   <img class="badge" src="https://data.jsdelivr.com/v1/package/npm/typescript-text-config/badge">
  </a>
	<a href="https://bundlephobia.com/result?p=typescript-text-config@0.1.0" target="_blank">
		<img alt="badge" src="https://badgen.net/github/release/RayMiles94/text-config-typescript">
	</a>
</p>
<div style="font-family: 'Times New Roman', Times, serif;">to install it! <div>


```console
user@bar:~$ npm i typescript-text-config --save
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
let file = new textconfig.TextConfig('test.txt');
console.log(file.getItem('a'));
// output : 5
```

# typescript code
```javascript
import { TextConfig } from 'typescript-text-config';
let file = new TextConfig('test.txt');
console.log(file.getItem('a'));
// output : 5
```
