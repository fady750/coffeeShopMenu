import { useGSAP } from "@gsap/react"
import gsap, { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function MyHero() {
    const viderRef = useRef(null);
    const isMobile = useMediaQuery({maxWidth:767});
    useGSAP(()=>{

        document.fonts.addEventListener("loadingdone", ()=>{
            const heroSplit = new SplitText('.title', {type:"chars, words"});
            const ParagraphSplit = new SplitText('.subtitle', {type:"lines"});
            heroSplit.chars.forEach((char)=>char.classList.add("text-gradient"))
            gsap.from(heroSplit.chars, {
                yPercent:100,
                duration:1.8,
                ease:"expo.out",
                stagger:0.06,
            })
            gsap.from(ParagraphSplit.lines, {
                yPercent:100,
                opacity:0,
                duration:1.8,
                ease:"expo.out",
                stagger:0.06,
                delay:1,
            })
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                scrub:true,
                start:"top top",
                end:"bottom top",
            }
        })

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        const viderTimelineRef = gsap.timeline({
            scrollTrigger:{
                trigger:"video",
                start:startValue,
                end:endValue,
                scrub:true,
                pin:true,
            }
        })

        viderRef.current.onloadedmetadata = () => {
            viderTimelineRef.to(viderRef.current, {
                currentTime: viderRef.current.duration,
                ease: "none",
            })
        }
    }, []);
    return (
        <>
            <section id="hero" className="" >
                <h1 className="title text-9xl">Coffee House</h1>
                <div className="body">
                    <div className="content">
                        <div className=" space-y-5 hidden md:block">
                            <p>Warm. Bold. Inviting..</p>
                            <p className="subtitle">wake up <br /> and smell the coffee</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cup on our menu is crafted with care, roasted to perfection, and brewed for every mood —
                                <a href="#coffees">View Coffee Menu</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0" >
                <video src="/public/videos/output.mp4"  muted playsInline preload="auto" ref={viderRef} />
            </div>
        </>
    )
}

export default MyHero
