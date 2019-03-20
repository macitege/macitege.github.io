'use strict'

const Typed = require('typed.js')
const $ = require('jquery')

$('.uptop').hide()

$(() => {
  $('#open-menu-button, #close-menu-button, .side-bar-link').on('click', () => {
    if (window.innerHeight > 520) {
      $('#side-section').toggleClass('expand-height')
    } else {
      $('#side-section').toggleClass('expand-width')
    }
    $('#nav-bar, #open-menu-button').toggleClass('appear')
    $('#open-menu-button, .credit').toggleClass('appear')
  })

  // $('.side-bar-link').on('click', () => {
  //   $('#side-section').toggleClass('expand-width')
  //   $('#nav-bar').toggleClass('appear')
  // })

  $('.uptop').on('click', () => {
    $(window).scrollTop()
    $('.main-content').scrollTop()
  })

  $(window).scroll(() => {
    const depth = $(window).scrollTop()
    depth > 800 ? $('.uptop').fadeIn() : $('.uptop').fadeOut()
  })

  $('.main-content').scroll((event) => {
    const depthW = $(window).scrollTop()
    const depth = $('.main-content').scrollTop()
    depth > 800 || depthW > 1 ? $('.uptop').fadeIn() : $('.uptop').fadeOut()
  })

  console.log('ಠ_ಠ Hello..?')
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    loop: true,
    backDelay: 1500
  })
})
