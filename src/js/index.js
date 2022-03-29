import { gsap } from "gsap"
import jQuery from 'jquery'
import bootstrap from 'bootstrap'

window.$ = window.jQuery = jQuery

let navbar = 'hidden'
document.querySelector('.navbar__toggler').onclick = function() {
    if (navbar == 'hidden') {
        document.querySelector('.navbar__nav').classList.add('visible')
        gsap.to('.navbar__nav', {
            yPercent: 0,
            y: 0,
            opacity: 1,
            duration: .3
        })
        document.querySelector('.navbar__toggler').classList.add('active')
        navbar = 'visible' 
    } else {
        document.querySelector('.navbar__nav').classList.remove('visible')
        gsap.to('.navbar__nav', {
            yPercent: -100,
            y: 0,
            opacity: 0,
            duration: .3
        })
        document.querySelector('.navbar__toggler').classList.remove('active')
        navbar = 'hidden'
    }
}

$(document).on("click", "#accordion .card button", function (t) {
    t.preventDefault(), $(this).closest(".card").hasClass("active") ? $(".card").removeClass("active") : ($(".card").removeClass("active"), $(this).closest(".card").addClass("active"))
});