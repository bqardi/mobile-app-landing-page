import axios from "axios";
import {useEffect, useState} from "react";
import TwitterCard from "./TwitterCard";
import Carousel from "react-grid-carousel";
import "./TwitterCards.scss";

function TwitterCards() {
	var [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/api/data.json").then(response => {
			setData(response.data.twitter);
		});
	}, []);

	return (
		<section className="TwitterCards">
			<h1 className="TwitterCards__title">What Our Users Say</h1>
			<Carousel
				cols={3}
				gap={20}
				showDots
				dotColorActive="#828282"
				dotColorInactive="#E2E1E1"
				loop
				responsiveLayout={[
					{
						breakpoint: 990,
						cols: 2,
						gap: 30
					},
					{
						breakpoint: 720,
						cols: 1,
						gap: 10
					}
				]}
				mobileBreakpoint={400}
				containerStyle={{
					maxWidth: "1200px",
					margin: "0 auto",
					paddingBottom: "0.5em"
				}}
			>
				{data?.map(item => (
					<Carousel.Item key={item.id}>
						<TwitterCard avatar={item.avatar} name={item.name}>
							{item.comment}
						</TwitterCard>
					</Carousel.Item>
				))}
			</Carousel>
		</section>
	);
}

export default TwitterCards;
