const cursor = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) =>{
    cursor.style.left = dets.x +"px";
    cursor.style.top = dets.y+"px";

    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";

})

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration : 0.5,
   height:"115px",
   scrollTrigger:{
     trigger: "#nav",
     scroller: "body",
     markers : true,
     start:"top -10px",
     end: "top -11px",
     scrub : 2,



   }


})
gsap.to("#main" ,{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers :true,
        start : "top -30%",
        end : "top -80%",
        scrub:2,

    }

})


gsap.from("#about-us img, #about-us-in" ,{
    y:50,
    opacity:0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers :true,
        start : "top 70%",
        end : "top 65%",
        scrub:3,

    }

})

gsap.from(".card" ,{
    scale:0.8,
    opacity:0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers :true,
        start : "top 70%",
        end : "top 65%",
        scrub:3,

    }

})

gsap.from("#colon1" ,{
   x: -70,
   y: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers :true,
        start : "top 50%",
        end : "top 47%",
        scrub:1,

    }

})

gsap.from("#colon2" ,{
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon2",
      scroller: "body",
      // markers: true,
      start: "top 55%",
      end: "top 45%",
      scrub: 1,
    }
  })

gsap.from("#page4 h1" ,{
    y: 50,
     scrollTrigger:{
         trigger: "#page4 h1",
         scroller: "body",
         // markers :true,
         start : "top 75%",
         end : "top 70%",
         scrub:3,
 
     }
 
 })
  