import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import App from './app.periodic.js'

const main = App

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)
