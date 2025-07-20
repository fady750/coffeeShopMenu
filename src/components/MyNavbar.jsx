import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap/all"

function MyNavbar() {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:"bottom start",
            }
        });
        navTween.fromTo("nav",{
            backgroundColor:"transparent",
        },{
            backgroundColor:"#00000050",
            backdropFilter:"blur(10px)",
            duration:1,

        })
    })

    return (
        <nav>
            <div className="" >
                <a href="#hero" className=" flex items-center gap-2" >
                    <img src="/public/images/logo.png" alt="Logo" />
                    <p>Renaissance</p>
                </a>
                <ul>
                    {navLinks.map((link)=>(
                        <li key={link.id} className="cursor-pointer" >
                            <a href={`#${link.id}`} >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default MyNavbar
