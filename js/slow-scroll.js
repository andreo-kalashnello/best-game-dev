

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !==1){

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.wrap',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.first-scroll', { opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.main__scroll-section',
            start: 'top',
            end: 'center',
            scrub: true,
        }
    })

    let itemsl = gsap.utils.toArray('.section .item-scroll-l');

    itemsl.forEach(item => {
        gsap.fromTo(item , { x: -100, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-100',
            }
        });
    });

    let itemsR = gsap.utils.toArray('.section .item-scroll-r');

    itemsR.forEach(item => {
        gsap.fromTo(item , { x: 100, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-100',
            }
        });
    });

    let itemsT = gsap.utils.toArray('.section .item-scroll-t');

    itemsT.forEach(item => {
        gsap.fromTo(item , { y: -100, opacity: 0}, {
            opacity: 1, y: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-100',
            }
        });
    });

    let itemsLt = gsap.utils.toArray('.section .item-scroll-lt');

    itemsLt.forEach(item => {
        gsap.fromTo(item , { x: -100, y: -100, opacity: 0}, {
            opacity: 1, x: 0, y: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-400',
            }
        });
    });

    let itemsLb = gsap.utils.toArray('.section .item-scroll-lb');

    itemsLb.forEach(item => {
        gsap.fromTo(item , {x: -100, y: 100, opacity: 0}, {
            opacity: 1, x: 0, y: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-700',
            }
        });
    });
    
    let itemsRt = gsap.utils.toArray('.section .item-scroll-rt');

    itemsRt.forEach(item => {
        gsap.fromTo(item , { x: 100, y: -100, opacity: 0}, {
            opacity: 1, x:0, y: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-400',
            }
        });
    });

    let itemsRb = gsap.utils.toArray('.section .item-scroll-rb');

    itemsRb.forEach(item => {
        gsap.fromTo(item , { x: 100, y: 100, opacity: 0}, {
            opacity: 1, x: 0, y: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true,
                start: '-1000',
                end: '-700',
            }
        });
    });
}


