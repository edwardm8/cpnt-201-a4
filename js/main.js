import '../css/style.css'
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'
import Chart from 'chart.js/auto';


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
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

setupCounter(document.querySelector('#counter'))
