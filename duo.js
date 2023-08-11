function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

init();



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to("#page1 h1",{
    x:-100,
},"anim")

tl.to("#page1 h2",{
    x:100
},"anim")

tl.to("#page1 video",{
    width:"95%",

},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top -113%",
        end:"top -130",
        scrub:3
    }
})


tl2.to("#main",{
    backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:"#main",
        start:"top -230% ",
        end:"top -240% ",
        scrub:3
    }
})

tl3.to("#main",{
    backgroundColor:"#000"
})

var boxes=document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){

    })
    elem.addEventListener("mouseenter",function(){
        
    })
})

document.querySelectorAll(".box")
.forEach(function (elem) {
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            lineHeight:"5vw",
            opacity:0,
            ease:Power3,
        });
    });


    elem.addEventListener("mousemove",function(dets){
        var diff=dets.clientY+ "10px" -elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX;
        
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot),
        });
    });
});

