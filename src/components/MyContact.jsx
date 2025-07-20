import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import gsap, { SplitText } from "gsap/all"

function MyContact() {
    useGSAP(()=>{
            const titleSplit = SplitText.create(".content > h2", {
                type:"words",
            })
            const tl = gsap.timeline( {
                scrollTrigger:{
                    trigger:"#contact",
                    start:"top center",
                    end:"end end",
                    scrub:true,
                },
            })
            tl.from(titleSplit.words, {
                opacity:0,
                yPercent:100,
                stagger:0.02,
            })
            .from("#contact h3, #contact p", {
                opacity:0,
                yPercent:100,
                stagger:0.02,
            });
    }, [])
    return (
        <footer id="contact" >
            <div className="content" >
                <h2>Where to Find Us</h2>
                <div>
                        <h3>Visit Our Coffee Shop</h3>
                        <p>New Cairo, Egypt</p>
                    </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>+20 (12) 739 075 02</p>
                    <p>fadynn7@gmail.com</p>
                </div>
                <div>
                    <p>opening every day</p>
                    {openingHours.map((time)=>(
                        <p key={time.day} >{time.day} : {time.time}</p>

                    ))}
                </div>
                <div>
                    <p>Socials</p>
                    <div className="flex-center gap-5 mt-1">
                        {socials.map((item)=>(
                            <a href={item.url} key={item.name} target="_blank" rel="noopener noreferrer" aria-label={item.name} >
                            <img src={item.icon} className="w-7 mt-3" />    
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default MyContact
