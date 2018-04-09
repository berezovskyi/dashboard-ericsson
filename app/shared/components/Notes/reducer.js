/*
*
* Notes Reducer
*
*/

import { Map } from 'immutable';
import { Note } from '../../../records';


const notesReducer = Map({
  ['12341-45674']: Note({
    id: '12341-45674',
    text: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'sc',
    highlighted: false,
  }),
  ['12341-45675']: Note({
    id: '12341-45675',
    text: 'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit. ',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'sc',
    highlighted: true,
  }),
  ['12341-45676']: Note({
    id: '12341-45676',
    text: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke.',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'wh',
    highlighted: false,
  }),
  ['12341-45677']: Note({
    id: '12341-45677',
    text: 'We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'ia',
    highlighted: true,
  }),
  ['12341-45678']: Note({
    id: '12341-45678',
    text: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do.',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'ia',
    highlighted: false,
  }),
  ['12341-45679']: Note({
    id: '12341-45679',
    text: 'Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.',
    timestamp: '2015-10-11',
    author: 'Raghu Nayyar',
    type: 'sc',
    highlighted: true,
  }),
  ['12341-45680']: Note({
    id: '12341-45680',
    text: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children.',
    timestamp: '2015-10-11',
    author: 'Didem Gurdur',
    type: 'ia',
    highlighted: false,
  }),
  ['12341-45681']: Note({
    id: '12341-45681',
    text: 'We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends',
    timestamp: '2015-10-11',
    author: 'Daniel Craig',
    type: 'ia',
    highlighted: true,
  }),
  ['12341-45682']: Note({
    id: '12341-45682',
    text: 'And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass.',
    timestamp: '2015-10-11',
    author: 'Denise Richards',
    type: 'wh',
    highlighted: true,
  }),
});


export default notesReducer;
