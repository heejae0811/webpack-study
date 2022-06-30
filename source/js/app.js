import './../css/about_style.scss';
import './../css/index_style.scss';
import hello_word from './hello.js';
import world_word from './world.js';
import _ from 'lodash';

document.querySelector('#root').innerHTML = _.join([hello_word, world_word], ' ');