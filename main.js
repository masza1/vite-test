import './style.css'
import $ from 'jquery'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
console.log($)

$.ajax({
  // url: 'http://192.168.1.8:8082/laravel-9/public/api/test',
  // url: 'http://192.168.1.8:8074/trade-exchange/public/api/login',
  // url: 'http://192.168.1.8:8082/laravel-9/test-cors/public/api/test',
  // url: 'http://192.168.1.8:8082/laravel-10/test-cors/public/api/test',
  // url: 'http://192.168.1.8:8082/laravel-11/test-cors/public/api/test',
  url: 'http://192.168.1.8:8082/laravel-11/artikel-khansa/public/api/login',
  // method: 'GET',
  method: 'POST',
  // crossDomain: true,
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'Access-Control-Allow-Origin': '*',
  // },
  success: (data) => {
    console.log(data)
  }
})