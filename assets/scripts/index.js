'use strict'

const Typed = require('typed.js')
const $ = require('jquery')

$(() => {
  console.log('ಠ_ಠ Hello..?')
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    loop: true,
    backDelay: 1500
  })
})
