const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page1animation(){

    var tl = gsap.timeline();
    tl.to("#page1 .page1_intro h1",{
    y:0,
    duration:.5,
    stagger:.3
    })
   tl.from("#video_container video",{
    scale:.9,
    opacity:0
})

}

page1animation();

function customcursor(){

    var crsr = document.querySelector("#custom_cursor");
    window.addEventListener("mousemove",function(dets){
        gsap.to(crsr,{
            left:`${dets.clientX}px`,
            top : `${dets.clientY}px`
        })

    })
    


}

customcursor();

function bigcursor(){
    var bgcrsr = document.querySelector(".bigcursor");
    document.addEventListener("mousemove",function(dets){
        gsap.to(bgcrsr,{
            left:`${dets.clientX}px`,
            top:`${dets.clientY}px`,
        })
    })

    var products = document.querySelectorAll("#page5 .product");
    products.forEach(function(product){
        product.addEventListener("mouseenter",function(){
            gsap.to(bgcrsr,{
               
                transform: `translate(-50%,-50%) scale(1)`
            })
        })
    })

    products.forEach(function(product){
        product.addEventListener("mouseleave",function(){
            gsap.to(bgcrsr,{
                transform: `translate(-50%,-50%) scale(0)`
        
            })
        })
    })
}
bigcursor();

function p3cardsinaction(){

    var p3cards = document.querySelectorAll("#p3cards .p3card .p3card_about");
    p3cards.forEach(function(p3card){
        p3card.addEventListener("mouseenter",function(dets){
            gsap.to(p3card,{
                height:"250px",
            })
        })
        p3card.addEventListener("mouseleave",function(dets){
            gsap.to(p3card,{
                height:"40px",
            })
        })

    })




}

p3cardsinaction();


