import './styles/main.scss'
import {
    gsap,
    Power0,
    Power1,
    Power2,
    Power3,
    Power4,
    Circ
} from "gsap"

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const btnHome = document.querySelector('.btnHome')
const btnAbout = document.querySelector('.btnAbout')
const romboid = document.querySelector('.coverRomboidImg')
const square = document.querySelector('.coverSquare')
const logoSml = document.getElementById('logoSmallImg')
const logoLrg = document.getElementById('logoLargeImg')
const header = document.getElementById('header1')
const paragraph = document.getElementById('paragraph1')
const maraImg = document.getElementById('backgroundImg')
// .width = window.innerWidth * 1

const tl = gsap.timeline({
    paused: true,
    reversed: true
})

tl.to(romboid, 2.5, {
    scale: 7,
    opacity: 0,
    ease: Power1.easeOut
})

tl.to(logoLrg, 2, {
    scale: 0.9,
    opacity: 0,
    ease: Power1.easeOut,
}, "-=2.5")

tl.to(maraImg, 2.5, {
    scale: 0.8,
    ease: Power2.easeOut,
}, "-=2.5")

tl.to(square, 2.5, {
    opacity: 0.62,
    ease: Power0.easeOut
}, "-=2.5")

tl.to(logoSml, 2.5, {
    opacity: 1,
    scale: 1,
    ease: Power2.easeOut,
}, "-=1.75")

tl.fromTo(header, {
    opacity: 0,
    y: 250,
    ease: Power4.easeOut
}, {
    opacity: 1,
    y: 0,
    duration: 2
}, "-=2")

tl.fromTo(paragraph, {
    opacity: 0,
    y: 800,
    ease: Power4.easeOut,
}, {
    opacity: 1,
    y: 0,
    duration: 2.25
}, "-=2.25")

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