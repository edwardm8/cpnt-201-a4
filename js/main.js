import '../css/style.css'
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'

let now = dayjs().format('MMM D, YYYY')
const oldDate = dayjs('2023-09-05')

const diffDate = dayjs().diff(oldDate, 'day')

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2>Today's Date: ${now}</h2>
    <h2>Number of days since start: ${diffDate}</h2>
    <div>
      <canvas id="myChart"></canvas>
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
