var tl = gsap.timeline()

gsap.from(".border", {
    y:-100,
    opacity:0,
    duration:2
})

tl.from("#img img, #navigation h3,#menu i", {
    y:-100,
    opacity:0,
    duration:2,
    stagger:0.2
})
tl.from(".main  #leftcorner h1 ,span", {
    x:-100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from(".main  #rightcorner img", {
   duration:2,
   delay:8,
    opacity:0,
    scale:3,
    stagger:.2

})

tl.from("#page2 #box", {
    opacity:0,
    stagger:0,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:1

    }
})
