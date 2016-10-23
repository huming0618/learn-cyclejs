import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver, h1} from '@cycle/dom';

function main(){
  const sink = {
    DOM: xs.periodic(1000).map( i=> h1('' + i  + ' second elapsed'))
  };

  return sink;
}

export default main;

// const drivers = {
//   DOM: makeDOMDriver('#app');
// }
//
// run(main, drivers);
