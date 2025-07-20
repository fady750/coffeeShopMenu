import { useRef, useState } from "react";
import { allCoffees } from "../../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function MyMenu() {
    const [currantIndex, setCurrantIndex] = useState(0);
    const contentRef = useRef(null);
    function goToNextSlide(index){
        const newIndex = (index + allCoffees.length ) % allCoffees.length;
        setCurrantIndex(newIndex);
    }
    function getCoffee(index){
        const newIndex = (index + allCoffees.length ) % allCoffees.length;
        return allCoffees[newIndex];
    }
    const currantCoffee = getCoffee(currantIndex);

    useGSAP(()=>{
        gsap.fromTo("#title", {
            opacity:0
        },{
            opacity:1,
            duration:1,
        })
        gsap.from(".details", {
            y:100,
            duration:1,
        })
        gsap.fromTo(".cocktail img", {
            opacity:0,
            xPercent:-100
        }, {
            opacity:1,
            xPercent:0,
            duration:1,
        })
    }, [currantIndex])

    return (
        <section aria-labelledby="menu-heading" id="menu">
            <h2 id="menu-heading" className="sr-only">
                coffee-menu
            </h2>
            <nav className="cocktail-tabs " aria-label="Cocktail Navigation">
                {allCoffees.map((item, idx)=>{
                    const isActive = idx === currantIndex;
                    return(
                        <button className={`${isActive ? " text-white border-white" :" text-white/50 border-white/50"}`} onClick={()=>goToNextSlide(idx)} key={item.id} >
                            {item.name}
                        </button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={()=>goToNextSlide(currantIndex-1)} >
                        <span>{getCoffee(currantIndex-1).name}</span>
                        <img src="/images/right-arrow.png" aria-hidden="true" alt="right-arrow" />
                    </button>
                    <button className="text-right" onClick={()=>goToNextSlide(currantIndex+1)} >
                        <span>{getCoffee(currantIndex+1).name}</span>
                        <img src="/images/left-arrow.png" aria-hidden="true" alt="left-arrow"/>
                    </button>
                </div>
                <div className="cocktail" >
                    <img src={currantCoffee.image} />
                </div>
                <div className="recipe" >
                    <div className="info" ref={contentRef}>
                        <p>Recipe for:</p>
                        <p id="title">{currantCoffee.name}</p>
                    </div>
                    <div className="details" >
                        <h2>{currantCoffee.title}</h2>
                        <p>{currantCoffee.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyMenu
