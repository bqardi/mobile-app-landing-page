import "./FeaturedIn.scss";

function FeaturedIn(){
	return (
		<article className="FeaturedIn">
			<h2 className="FeaturedIn__title">We have been featured in</h2>
			<div className="FeaturedIn__logos">
				<img src="/images/sports-tv.svg" alt="Sports TV"/>
				<img src="/images/sports.svg" alt="Sports"/>
				<img src="/images/nbc-sports.svg" alt="NBC Sports"/>
				<img src="/images/designer-technology.svg" alt="Designer Technology"/>
				<img src="/images/designer-news.svg" alt="Designer News"/>
				<img src="/images/sky-sports.svg" alt="Sky Sports"/>
			</div>
		</article>
	);
}

export default FeaturedIn;