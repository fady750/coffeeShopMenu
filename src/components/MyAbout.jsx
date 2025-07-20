import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

function MyAbout() {
    useGSAP(()=>{
        
        const wordsText = SplitText.create("#about h2", {
            type:"words",
        })
        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start:"top center",
                end:"center center",
                scrub:true
            }
        })
        scrollTimeline.from(wordsText.words, {
            yPercent:100,
            opacity:0,
            duration:1,
            stagger:0.02,
            ease:"expo.out",

        })
        .from(".top-grid div, .bottom-grid div", {
            opacity:0,
            duration:1,
            stagger:0.04,
            ease:"power1.inOut",
        }, "-=0.5")
    })
    return (
        <div id="about">
            <div className="mb-16 px-5 md:px-0" >
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge" >Finest Coffee</p>
                        <h2>where every sip tells a story <span className="text-white">-</span>
                            from bean to brew
                        </h2>
                    </div>
                    <div  className="sub-content">
                        <p>
                            Every cup we pour is a reflection of our dedication — from sourcing the finest beans to mastering the perfect roast. That care is what transforms a daily ritual into a truly satisfying experience.
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.9</span>

                            </p>
                            <p className="text-sm text-white-100" >
                                more than +12,000 happy coffee lovers
                            </p>

                        </div>
                    </div>

                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div  className=""/>
                    <img src="/public/images/abt1.png" alt="grid-image-1" />
                </div>
                <div className="md:col-span-6">
                    <div  className=""/>
                    <img src="/public/images/abt2.png" alt="grid-image-2" />
                </div>
                <div className="md:col-span-3">
                    <div  className=""/>
                    <img src="/public/images/abt5.jpeg" alt="grid-image-5" />
                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div  className=""/>
                    <img src="/public/images/abt3.jpg" alt="grid-image-3" />
                </div>
                <div className="md:col-span-4">
                    <div  className=""/>
                    <img src="/public/images/abt4.jpg" alt="grid-image-4" />
                </div>
            </div>
        </div>
    )
}

export default MyAbout
