//locomotive js for smooth scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

//inorder to work with locomotive and scroll trigger simultaneoulsy

function locomotiveAnimations(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimations();




//navbar Animation
function navbarAnimation(){
    gsap.to("#nav-part1 svg",{
        transform: `translateY(-100%)`,
        scrollTrigger:{
            trigger: "#page1",
            scroller:"#main",
            // markers:true,
            start: "top 0",
            end: "top -5%",
            scrub:2,
        }
    })
    
    
    
    gsap.to("#nav-part2 #links",{
        transform: `translateY(-100%)`,
        opacity:0,
        scrollTrigger:{
            trigger: "#page1",
            scroller:"#main",
            // markers:true,
            start: "top 0",
            end: "top -5%",
            scrub:2,
        }
    })

}

navbarAnimation();





// play button animation
function videoContAnimation() {
    const videoCont = document.querySelector("#video-container");
    const playBtn = document.querySelector("#play");

videoCont.addEventListener("mouseenter",function ()
{
    gsap.to(playBtn, {
        scale:1,
        opacity:1,
    })
    
})

videoCont.addEventListener("mouseleave", function(){
    gsap.to(playBtn, {
        scale:0,
        opacity:0,
    })
})

// dets -  details information of all the events on the Elements 
videoCont.addEventListener("mousemove",function (dets)
{
    gsap.to(playBtn, {
        left:dets.x-60,
        top:dets.y-80,
    })
    
})




}

videoContAnimation();


//page1 Animation
function page1Animation(){
    gsap.from("#page1 h2", {
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.8,
        stagger:0.3,
    })


    gsap.from("#page1 #video-container", {
        
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    })


}

page1Animation();



//cursor Animation for page3
function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    
    const page3_child_anim = document.querySelectorAll(".child");
    
        page3_child_anim.forEach( (elem)=> {
            elem.addEventListener("mouseenter", ()=>{
                gsap.to("#cursor",{
                    transform:`translate(-50%, -50%) scale(1)`,
                })
        })
    
    
        elem.addEventListener("mouseleave", ()=>{
            gsap.to("#cursor",{
                transform:`translate(-50%, -50%) scale(0)`,
            })
        })
        
    });



//writing this animation directly on the html page to move the cursor with XY

// document.querySelector(".child").addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         transform:`translate(-50%, -50%) scale(1)`,
//     })
// })

// document.querySelector(".child").addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         transform:`translate(-50%, -50%) scale(0)`,
//     })
// })


// Using the forEach for all the page3 child

}

cursorAnimation();













