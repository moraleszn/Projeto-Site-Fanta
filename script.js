gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.two',
    start: "top 85%",
    end: "top 30%",
    scrub: 1.0, 
    markers: false
  }
});


tl.to(["#fanta",], {
    top: "120%",
    left: "0%",
    ease: "power1.out"
}, 0)

tl.to(["#laranja-cortada",], {
    top: "150%",
    left: "23%",
    ease: "power1.out"
}, 0)

.to("#laranja", {
    width: "15%",
    top: "160%",
    right: "23%", 
    ease: "power1.out"
}, 0); 

tl.to(["#folha"], {
    top: "110%",
    rotate: "130deg",
    left: "70%",
    ease: "power1.out"
}, 0)

tl.to(["#folha2"], {
    top: "110%",
    rotate: "130deg",
    left: "0%",
    ease: "power1.out"
}, 0)

var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.three',
      start: "0% 95%",
      end: "20% 50%",
      scrub: 1.0, 
      markers: false
    }
  });

tl2.from(
    ".lemon1",
    {
        rotate: "-90deg",
        left: "-100%",
        top: "110%",
    },
    "ca"
);

tl2.from(
    ".lemon2",
    {
        rotate: "90deg",
        left: "100%",
        top: "110%",
    },
    "ca"
);

tl2.from(
    "#pepsi",
    {
        rotate: "90deg",
        left: "100%",
        top: "110%",
    },
    "ca"
);

tl2.from(
    "#cocacola",
    {
        rotate: "-90deg",
        left: "-100%",
        top: "110%",
        
    },
    "ca"
);

tl2.to(
    "#laranja-cortada",
    {
        width:"18%",
        left:"41%",
        top: "204%"
    },
    "ca"
);

tl2.to(
    "#fanta",
    {
        width:"22%",
        left:"39%",
        top: "208%"
    },
    "ca"
);
