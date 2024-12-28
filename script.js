const setUpStuff = () => {
    const lenis = new Lenis({
        duration: 4
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    gsap.registerPlugin(ScrollTrigger);
}
setUpStuff();

const AnimationSection = () => {
    let tl = gsap.timeline()
    tl.from("#text1 h1,#text2 h1", {
        y: 20,
        rotate: 3,
        duration: 1,
        opacity: 0
    })
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            scrub: 2,
            markers: false,
            start: "2% 0%",
            end: "80%"
        }
    })
    tl2.to("#text1", {
        x: -100,
        filter: "blur(10px)"

    }, "both")
    tl2.to("#text2", {
        x: 100,
        filter: "blur(10px)"
    }, "both")
    tl2.to("#videoContainer", {
        width: "100%"
    }, "both")
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2-part-2",
            scroller: "body",
            scrub: true,
            markers: false,
            start: "-10% 3%",
            end: "5% 3%"
        }
    })
    tl4.from("#img1", {
        x: -100,
        ease: "linear",
    }, "change")
    tl4.from("#img2", {
        x: 100,
        ease: "linear",
    }, "change")
}
AnimationSection();

const colorChanger = () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            scrub: 2,
            markers: false,
            start: "-5% 30%",
            end: "5% 10%"
        }
    })

    tl2.to("#main", {
        backgroundColor: "#fff",
        color: "#111111",
    }, "change")
    tl2.to("#circle,.svg path", {
        backgroundColor: "#000",
        fill: "#000"
    }, "change")

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            scrub: 2,
            markers: false,
            start: "-20% 30%",
            end: "5% 10%"
        }
    })
    tl3.to("#main", {
        backgroundColor: "#111111",
        color: "#fff",
    }, "change")
    tl3.to("#circle,.svg path", {
        backgroundColor: "#fff",
        fill: "#fff"
    }, "change")

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            scrub: 2,
            markers: false,
            start: "0% 10%",
            end: "5% 10%"
        }
    })
    tl4.to("#main", {
        color: "#111111",
    }, "change")
    tl4.to("#circle,.svg path", {
        backgroundColor: "#000",
        fill: "#000"
    }, "change")
}

colorChanger();

const cursor = () => {
    let main = document.querySelector("#main")
    let cursor = document.querySelector("#cursor")
    main.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            ease: "Power4.out"
        })
    })
    main.addEventListener("mouseleave", (dets) => {
        gsap.to(cursor, {
            scale: 0
        })
    })
    main.addEventListener("mouseenter", (dets) => {
        gsap.to(cursor, {
            scale: 1
        })
    })
    const imageOnCursor = () => {
        let elems = document.querySelectorAll(".elems")
        elems.forEach((elem) => {
            elem.addEventListener("mouseenter", () => {
                let imageUrl = elem.getAttribute("data-image")
                cursor.style.backgroundImage = `url("${imageUrl}")`
                cursor.style.height = "300px"
                cursor.style.width = "400px"
                cursor.style.borderRadius = "15px"
            })
            elem.addEventListener("mouseleave", () => {
                cursor.style.backgroundImage = `url("")`
                cursor.style.height = "1.25rem"
                cursor.style.width = "1.25rem"
                cursor.style.borderRadius = "50%"
            })
        })
    }

    imageOnCursor();
    function magneticEffect(element, distance) {
        var x = element.getBoundingClientRect().x;
        var y = element.getBoundingClientRect().y;
        var width = element.getBoundingClientRect().width;
        var height = element.getBoundingClientRect().height;

        var cursorX = cursor.getBoundingClientRect().x;
        var cursorY = cursor.getBoundingClientRect().y;

        var distanceX = cursorX - (x + width / 2);
        var distanceY = cursorY - (y + height / 2);

        if (distanceX < 0) {
            distanceX = -distanceX;
        }
        if (distanceY < 0) {
            distanceY = -distanceY;
        }

        var x = cursorX - x - width / 2;
        var y = cursorY - y - height / 2;

        if (distanceX < distance && distanceY < distance) {
            element.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
            element.children[0].style.transform = `translate(${x / 11}px, ${y / 11}px)`;
            element.classList.add('focus');
            cursor.style.opacity = "0";
        }
        else if (element.classList.contains('focus')) {
            //make it bounce a little and then return to its original state
            element.children[0].style.transform = `translate(0px, 0px)`;
            cursor.style.opacity = "1";
            element.classList.remove('focus');

            //bouncing animation
            var bounce = gsap.timeline();
            bounce.to(element, {
                x: -x / 3,
                y: -y / 3,
                ease: "none",
                duration: 0.2,
            })
                .to(element, {
                    x: x / 4,
                    y: y / 4,
                    ease: "none",
                    duration: 0.2,
                })
                .to(element, {
                    x: 0,
                    y: 0,
                    ease: "none",
                    duration: 0.1,
                });


                var bounceText = gsap.timeline();
                let text = element.children[0];
                bounceText.to(text, {
                    x: -x / 14,
                    y: -y / 14,
                    ease: "none", // Corrected easing
                    duration: 0.2,
                })
                .to(text, {
                    x: x / 20,
                    y: y / 20,
                    ease: "none", // Corrected easing
                    duration: 0.2,
                })
                .to(text, {
                    x: 0,
                    y: 0,
                    ease: "none", // Corrected easing
                    duration: 0.1,
                });
                
            gsap.registerPlugin()
        }
    }
    document.addEventListener('mousemove', function (e) {
        magneticEffect(document.querySelector('#magnetic'), 100);
    })
}

cursor();
