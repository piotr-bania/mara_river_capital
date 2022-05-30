import './styles/main.scss'
import {
    gsap,
    Power0,
    Power1,
    Power2,
    Power3,
    Power4,
    Circ,
    Sine,
    Expo
} from "gsap"

const btnAbout = document.querySelector('.btnAbout')
const romboid = document.querySelector('.coverRomboidImg')
const square = document.querySelector('.coverSquare')
const logoSml = document.getElementById('logoSmallImg')
const logoLrg = document.getElementById('logoLargeImg')
const header = document.getElementById('header1')
const paragraph = document.getElementById('paragraph1')

const tl = gsap.timeline({
    paused: true,
    reversed: true
})

tl.to(romboid, 2.5, {
    scale: 5,
    opacity: 0,
    ease: Power2.easeOut
})

tl.to(logoLrg, 2.5, {
    scale: 0.5,
    opacity: 0,
    ease: Power2.easeOut,
}, "-=2.5")

tl.to(square, 2.5, {
    opacity: 0.7,
    ease: Power2.easeOut
}, "-=2.25")

tl.to(logoSml, 2, {
    opacity: 1,
    scale: 1,
    ease: Power2.easeOut,
}, "-=1.5")

tl.fromTo(header, {
    opacity: 0,
    y: 200,
    ease: Power2.easeOut
},  {
    opacity: 1,
    y: 0,
    duration: 1.5
}, "-=1.75")

tl.fromTo(paragraph, {
    opacity: 0,
    y: 500,
    ease: Power2.easeOut,
}, {
    opacity: 1,
    y: 0,
    duration: 1.5
}, "-=1.75")

btnAbout.addEventListener('click', () => {
    tl.play()
})