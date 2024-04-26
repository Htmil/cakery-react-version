import { useLoaderData, Link } from "react-router-dom";

export default function CupCakes() {
	const cupcakes = useLoaderData();

	return (
		<>
			<div className="cupcakeWrapper">
				<div className="cupcakeGrid">
					{cupcakes.map(cupcake => (
						<div className="cakeCard">
							<div className="imageContainter">
								<div className="image" style={{ backgroundImage: `url(/images/${cupcake.imageName})` }}></div>
							</div>
							<div className="cakeInfo">
								<p className="productName">{cupcake.productName}</p>
								<p className="price">{cupcake.price}</p>
								<div className="button">Buy now</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

//* Loader function

export const cupCakesLoader = async () => {
	const res = await fetch('http://localhost:4000/cupcakes');

	return res.json()
}
