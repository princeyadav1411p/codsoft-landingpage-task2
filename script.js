gsap.from(".mid a",{
    y:-30,
    duration:3,
    delay:0.2,
    repeat:-1,
    opacity:0,
    stagger:0.3,
     yoyo:true
    })
     gsap.to(".radhe h1",{
    x:400,
    duration:5,
    delay:1.5,
    repeat:-1,
    opacity:1
    })
    gsap.to(".down p",{
    x:30,
    duration:4,
    opacity:0,
    repeat:-1
    })
    gsap.to(".page3 p",{
        x:30,
        delay:1,
        duration:4,
        opacity:1,
        repeat:-1,
        })
        gsap.from(".founder img",{
            duration:3,
            repeat:-1,
            yoyo:true,
            scale:0.9,
        
        })
        
         var page2 =document.querySelector(".page2")
         var button =document.querySelector(" button")
         let i =0;
         button.addEventListener("click",function(){
            if(i==0){
                page2.style.backgroundImage ="url(https://images.unsplash.com/photo-1562116290-cf310c050cf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                page2.style.backgroundImage ="url(https://images.unsplash.com/photo-1461005490174-1d69ffda0669?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                i=1
            }
            else{
                page2.style.backgroundImage ="url(https://images.unsplash.com/photo-1562116290-cf310c050cf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                i =0
            }
            
         })
        