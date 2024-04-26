import { useLoaderData } from "react-router-dom";

export default function WedCakes() {
	const wedCakes = useLoaderData();
	return (
		<div className="cakeWrapper">
			<div className="cakeGrid">
				{wedCakes.map(wedCake => (
					<div className="cakeCard">
						<div className="imageContainter">
							<div className="image" style={{ backgroundImage: `url(/images/${wedCake.imageName})` }}></div>
						</div>
						<div className="cakeInfo">
							<p className="productName">{wedCake.productName}</p>
							<p className="price">{wedCake.price}</p>
							<div className="button">Buy now</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export const wedCakesLoader = async () => {
	const res = await fetch('http://localhost:4000/cakes');

	return res.json()
}