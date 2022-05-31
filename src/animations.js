import './styles/main.scss'
import {
    gsap,
    Power2
} from "gsap"

const btnHome = document.querySelector('.btnHome')
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

tl.to(logoSml, 2.25, {
    opacity: 1,
    scale: 1,
    ease: Power2.easeOut,
}, "-=1.25")

tl.fromTo(header, {
    opacity: 0,
    y: 250,
    ease: Power2.easeOut
}, {
    opacity: 1,
    y: 0,
    duration: 1.5
}, "-=1.5")

tl.fromTo(paragraph, {
    opacity: 0,
    y: 800,
    ease: Power2.easeOut,
}, {
    opacity: 1,
    y: 0,
    duration: 2
}, "-=1.75")

btnAbout.addEventListener('click', () => {
    tl.play()
})

btnHome.addEventListener('click', (e) => {
    if (tl.isActive()) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    tl.reverse()
})

logoSml.addEventListener('click', () => {
    tl.play()
})

logoSml.addEventListener('click', (e) => {
    if (tl.isActive()) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    tl.reverse()
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reversed()
}