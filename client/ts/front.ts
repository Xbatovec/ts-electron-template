import { helloThere } from './hello.js';

// function that
const backEndGreeting = async () => console.log('2:', await window['backEnd'].greeting());
backEndGreeting();
helloThere();