import hello_word from './hello.js';
import world_word from './world.js';
import _ from 'lodash';
import css from './style.css';
import hello from "./hello.js";

document.querySelector('#root').innerHTML = _.join([hello_word, world_word, ' ']);

console.log('css', css);