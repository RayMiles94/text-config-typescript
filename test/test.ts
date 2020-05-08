import { TextConfig } from '../build/index';


const file = new TextConfig(__dirname + '/text.txt');
console.log(file.getItem("name"));
console.log(file.getItem("git"));
console.log(file.getRAWDATA());

