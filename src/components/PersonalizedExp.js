import Article from "./Article";
import "./PersonalizedExp.scss";

function PersonalizedExp(){
	return (
		<div className="PersonalizedExp">
			<div className="PersonalizedExp__container">
				<Article style={{maxWidth: "450px"}}>
					<Article.Link to="/">
						<img src="/images/logo.svg" alt="Logo"/>
					</Article.Link>
					<div className="PersonalizedExp__content">
						<Article.Title level="1">Get a personalized football experience tailored just for you</Article.Title>
						<Article.Text>
							Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team.
						</Article.Text>
						<div className="PersonalizedExp__links">
							<Article.Link to="/download-on-app-store">
								<img src="/images/apple-store.svg" alt="Download on App Store"/>
							</Article.Link>
							<Article.Link to="/download-on-google-play">
								<img src="/images/google-play.svg" alt="Download on Google Play"/>
							</Article.Link>
						</div>
					</div>
				</Article>
			</div>
		</div>
	);
}

export default PersonalizedExp;