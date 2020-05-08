# text-config-typescript
its typescript mini libary for parsing data config from text file 

to use it :
# first create text file
# exemple create test.text
> a = 5 b = 45


# import text-config-typescript package
```javascript
const textconfig = require('../typescript-learn');
var file = new textconfig.TextConfig('test.txt');
console.log(file.getItem('a'));
// output : 5
```
