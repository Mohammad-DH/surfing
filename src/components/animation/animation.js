import gsap from "gsap"

export const animation = () => {

    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".container",
            pin: true,   // pin the trigger element while active
            start: "top center", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
        }
    });

// add animations and labels to the timeline
    tl.addLabel("start")

        .addLabel("end");

}
export const heroSliderAnimationGo = () => {
    let tl = gsap.timeline({});
    tl.to(".sliderCardImage", {duration: 1, x: "100vw"})
        .to(".sliderCardContent", {duration: .8, x: "-90vw"}, "-=1")
}
export const heroSliderAnimationBack = () => {
    let tl = gsap.timeline({});
    tl.to(".sliderCardImage", {delay: 1, duration: 1, x: "0vw"})
        .to(".sliderCardContent", {duration: .8, x: "0vw"}, "-=1")
}


export const shopSliderAnimationGo = () => {
    let tl2 = gsap.timeline({});
    tl2.to(".shopCard", {scale: .5, opacity: 0, duration: .6, stagger: 0.2})


}
export const shopSliderAnimationBack = () => {
    let tl2 = gsap.timeline({});
    tl2.to(".shopCard", {delay: 1, scale: 1, opacity: 1, duration: .6, stagger: 0.2})

}

