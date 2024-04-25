import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Home() {
    const thisWeek = useLoaderData(thisWeekLoader);
    return (
        <>
    <header>
        <div className="coverImageMain"></div>
        <div className="coverCTA">
        <Link to="/"><div className="logo"></div></Link>
            <h1 className="ctaText">Get Yours Delivered!</h1>
            <Link to="./products"><button className="ctaButton">Browse Cakes</button></Link>
        </div>
    </header>
    <main>
        <div className="ChosenProductsWrapper">
            <div className="pageInfoWrapper">
                <p>
                    Hi! Welcome to Munamii Cakery! We offer you the most delicious cakes
                    and cupcakes for all kinds of events and celebrations. Browse around
                    to discover what you would like to buy.
                </p>
            </div>
            <h2>This week's offer:</h2>
            <div className="ChosenGrid">
                {thisWeek.map(cake => (
                    <div className="cakeCard">
                        <div className="imageContainter">
                            <div className="image" style={{ backgroundImage: `url(/images/${cake.imageName})` }}></div>
                        </div>
                        <div className="cakeInfo">
                            <p className="productName">{cake.productName}</p>
                            <p className="price">{cake.price}</p>
                            <div className="button">Buy now</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>
    </>
    );
}

export const thisWeekLoader = async () => {
    const res = await fetch('http://localhost:4000/thisWeek');

    return res.json()
}
