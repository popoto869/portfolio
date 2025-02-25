$(function(){
    // gnb onclick
    $('header ul.gnb li').click(function(){
        $('header ul.gnb li').removeClass("on")
        $(this).addClass("on")}
    )

    // 스크롤바 위치에 따른 header 변화
    let prePosition=0
    let header = document.getElementById('header');
    document.addEventListener("scroll",function(){
        let nowPosition = $(window).scrollTop()
        if(nowPosition > 300){
            $('header').addClass("on")
            if(nowPosition > prePosition){
                header.style.transform = "translateY(-100%)";
            }else{
                header.style.transform = "translateY(0)";
            }
        }else{
            $('header').removeClass("on")
            header.style.transform = "translateY(0)";
        }
        prePosition = nowPosition
    })
    // gnb mouseover
    Splitting()

    // 마우스커서
    // document.addEventListener('mousemove', (e) => {
    //     let mouseX = e.pageX + 10; // document의 x좌표값
    //     let mouseY = e.pageY + 10; // document의 y좌표값
    
    //     let cursor = document.querySelector('.cursor');
    //     cursor.style.left = mouseX + 'px';
    //     cursor.style.top = mouseY + 'px';
    // })

    // 갤러리
    gsap.timeline({
        // 스크롤바에 따른 애니메이션 실행
        scrollTrigger: {
            scrub: 1,
            trigger: "#work",
            start: "20% 100%",
            end: "90% 90%",
            // markers: true
        },
    })
    // .to('대상',{},지연시간)
    .to("#work ul li:nth-child(1)",{y: -400, duration: 1, ease: "ease-in-out"},0)
    .to("#work ul li:nth-child(2)",{y: -400, duration: 1, ease: "ease-in-out"},0)
    .to("#work ul li:nth-child(3)",{y: -400, duration: 1, ease: "ease-in-out"},0)
    .to("#work ul li:nth-child(4)",{y: -400, duration: 1, ease: "ease-in-out"},0)
    .to("#work ul li:nth-child(5)",{y: -400, duration: 1, ease: "ease-in-out"},0.3)
    .to("#work ul li:nth-child(6)",{y: -400, duration: 1, ease: "ease-in-out"},0.3)
    .to("#work ul li:nth-child(7)",{y: -400, duration: 1, ease: "ease-in-out"},0.3)
    .to("#work ul li:nth-child(8)",{y: -400, duration: 1, ease: "ease-in-out"},0.3)
    .to("#work ul li:nth-child(9)",{y: -400, duration: 1, ease: "ease-in-out"},0.3)
    .to("#work ul li:nth-child(10)",{y: -400, duration: 1, ease: "ease-in-out"},0.3)
    .to("#work ul li:nth-child(11)",{y: -400, duration: 1, ease: "ease-in-out"},0.6)
    .to("#work ul li:nth-child(12)",{y: -400, duration: 1, ease: "ease-in-out"},0.6)
    .to("#work ul li:nth-child(13)",{y: -400, duration: 1, ease: "ease-in-out"},0.6)

    // 글자색 변화는 효과
    gsap.timeline({
        scrollTrigger:{
            scrub: 3,
            trigger: "#catchphrase .txtbox",
            start: "0% 40%", 
            end: "100% 60%",
            // markers: true
        }
    })
    .fromTo("#catchphrase .txtbox .mask span",{backgroundSize:"0% 100%"},{backgroundSize:"100% 100%"},0)


    gsap.timeline({
        scrollTrigger:{
            scrub: 3,
            trigger: "#change",
            start: "80% 80%", 
            end: "100% 100%",
            // markers: true
        }
    })
    .to("#change",{backgroundColor:"#fff", color: "#56453E", ease:"easeOutQuint", duration:1})

    // const section = gsap.utils.toArray('.contents');
    gsap.utils.toArray('.contents').forEach((section,i)=>{
        ScrollTrigger.create({
            trigger: section,
            start: "0% 0%",
            pin: true,
            pinSpacing: false,
            scrub:3,
            // markers: true
        })
    })
    ScrollTrigger.create({
        snap:1 / (section.length - 2),
        ease: "power1.inOut", // 부드러운 애니메이션 효과
});
})