import hello_word from './hello.js';
import world_word from './world.js';
import css from './../css/style.css';
import _ from 'lodash';

document.querySelector('#root').innerHTML = _.join([hello_word, world_word], ' ');