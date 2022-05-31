import './styles/main.scss'
import {
    gsap,
    Power0,
    Power1,
    Power2,
    Power3,
    Power4,
    Circ,
    Sine
} from "gsap"

const btnHome = document.querySelector('.btnHome')
const btnAbout = document.querySelector('.btnAbout')
const romboid = document.querySelector('.coverRomboidImg')
const square = document.querySelector('.coverSquare')
const logoSml = document.getElementById('logoSmallImg')
const logoLrg = document.getElementById('logoLargeImg')
const header = document.getElementById('header1')
const paragraph = document.getElementById('paragraph1')
const maraImg = document.getElementById('backgroundImg')

const tlAbout = gsap.timeline({
    paused: true,
    reversed: true
})

tlAbout.to(romboid, 2.5, {
    scale: 5,
    opacity: 0,
    ease: Power2.easeOut
})

tlAbout.to(logoLrg, 2.5, {
    scale: 0.8,
    opacity: 0,
    ease: Power2.easeOut
}, "-=2.5")

tlAbout.to(maraImg, 2.5, {
    scale: 1.6,
    x: -25,
    y: 210,
    ease: Power2.easeOut
}, "-=2.5")

tlAbout.to(square, 2.5, {
    opacity: 0.62,
    ease: Power2.easeOut
}, "-=2.5")

tlAbout.to(logoSml, 2.5, {
    opacity: 1,
    scale: 1,
    ease: Power2.easeOut
}, "-=1.75")

tlAbout.fromTo(header, {
    opacity: 0,
    y: 250,
    ease: Power2.easeOut
}, {
    opacity: 1,
    y: 0,
    duration: 2
}, "-=2")

tlAbout.fromTo(paragraph, {
    opacity: 0,
    y: 800,
    ease: Power2.easeOut
}, {
    opacity: 1,
    y: 0,
    duration: 2.25
}, "-=2.25")

btnAbout.addEventListener('click', () => {
    tlAbout.play()
})

btnHome.addEventListener('click', (e) => {
    if (tlAbout.isActive()) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    tlAbout.reverse()
})

logoSml.addEventListener('click', () => {
    tlAbout.play()
})

logoSml.addEventListener('click', (e) => {
    if (tlAbout.isActive()) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    tlAbout.reverse()
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reversed()
}