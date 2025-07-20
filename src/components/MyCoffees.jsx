import { hotCoffeeList, icedCoffeeList } from "../../constants"

function MyCoffees() {


    return (
        <section id="coffees" className="">
            <div className="list">
                <div className="popular" >
                    <h2>most popular hot Coffee</h2>
                    <ul>
                        {hotCoffeeList.map((drink)=>(
                            <li key={drink.name}>
                                <div className="md:me-28" >
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                    <span>- {drink.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved" >
                    <h2>most popular Ice Coffee:</h2>
                    <ul>
                        {icedCoffeeList.map((drink)=>(
                            <li key={drink.name}>
                                <div className="me-28" >
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                    <span>- {drink.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MyCoffees
