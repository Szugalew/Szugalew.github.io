
/*
let thing = document.querySelector(".horscroll");

let thing_parent = document.querySelector(".horscrollcontainer");
// Get the navbar
var hors = document.getElementById("horscrollid");

var theafter = document.querySelector(".theafter");

// Get the offset position of the navbar
var pos = thing.offsetTop;

window.addEventListener("scroll", function() {
    doMoveScroll()
  })

  function reportWindowSize() {
    theafter = document.querySelector(".theafter");
    thing_parent.classList.remove("stickyscroll");
    thing = document.querySelector(".horscroll");
// Get the navbar
     hors = document.getElementById("horscrollid");

// Get the offset position of the navbar
     pos = thing.offsetTop;
     doMoveScroll();
  }
  window.onresize = reportWindowSize;


  function doMoveScroll() {
    if (window.pageYOffset  >= pos) {
        thing_parent.classList.add("stickyscroll")
        
    let pageY = window.pageYOffset;
    let targetDis = theafter.offsetTop;
    //let thing = document.querySelector(".horscroll");
    //var distance  = $('.horscroll').offset().top;
    //var distance = thing.offset().top;
    //thing.style.left = -((thing.clientWidth-1000)*(pageY - pos)/(targetDis - pos)) + 'px';
    var end_offset = window.innerWidth;
    if (end_offset > 1000) {
        end_offset = 1000;
    }
    thing.style.transform = `translateX(${-(thing.clientWidth - end_offset)*(window.pageYOffset - pos)/(targetDis - window.innerHeight - pos)}px)`;
    thing.style.transform += `translateY(${(pageY-pos)}px)`;
    } else {
        thing_parent.classList.remove("stickyscroll");
    }
    if (window.pageYOffset  >= targetDis - window.innerHeight) {
        thing.style.transform = `translateX(${-(thing.clientWidth-900)}px)`;

    }
    //thing.scrollTop(pageY);
    //thing.scrollLeft(pageY);
  }
  */