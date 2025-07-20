import { useGSAP } from "@gsap/react"
import { featureLists, goodLists } from "../../constants"
import gsap from "gsap"

function MyArt() {
    useGSAP(()=>{
        const pageTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                start:"top top",
                scrub:1.5,
                pin:true,
            }
        })
        pageTimeline.to(".will-fade", {
            opacity:0,
            stagger:0.2,
            ease:"power1.inOut",
        })
        .to(".masked-img", {
            maskPosition:"center",
            maskSize:"450%",
            duration:1,
            ease:"power1.inOut",
        })
        .to("#masked-content", {
            opacity:1,
            duration:0.5,
            ease:"power1.inOut",
        })

    }, [])


    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade mt-4 text-9xl text-center">The Art of Coffee</h2>
                <div className="content">
                    <ul className=" space-y-4 will-fade" >
                        {goodLists.map((item, index)=>(
                            <li key={index} className="flex items-center gap-2" >
                                <img src="/images/check.png" alt="check"/>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="cocktail-img" >
                        <img src="/images/abt3.jpg" className="abs-center masked-img"/>
                    </div>
                    <ul className=" space-y-4 will-fade" >
                        {featureLists.map((item, index)=>(
                            <li key={index} className="flex items-center justify-start gap-2" >
                                <img src="/images/check.png" alt="check"/>
                                <p className="md:w-fit w-60" >{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="masked-container" >
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn’t just coffee. It’s a carefully brewed moment, made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyArt
