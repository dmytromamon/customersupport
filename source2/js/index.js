import { gsap } from "gsap"
import bootstrap from 'bootstrap'

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