import Article from "./Article";
import BackImage from "./BackImage";
import EnhancedCard from "./EnhancedCard";
import "./EnhancedExp.scss";
import Grid from "./Grid";

function EnhancedExp(){
	return (
		<div className="EnhancedExp">
			<Grid>
				<Article reverse>
					<Article.Title level="3">What it does</Article.Title>
					<Article.Title>An Enhanced Football Experience</Article.Title>
					<Article.Text>
						The Guardian Live Scores app is your go to app for live scores and watching Premier League goals… Get in there, what a result!
					</Article.Text>
					<Article.Text>
						As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from The Guardian publication.
					</Article.Text>
					<Article.Link to="/enhanced">Learn more</Article.Link>
				</Article>
				<BackImage
					src="/images/enhanced-football-experience.png"
					alt="Footballplayers"
					fade
				>
					<div className="EnhancedExp__cards">
						<div className="EnhancedExp__cardsFront">
							<EnhancedCard>
								<EnhancedCard.Body>
									<div className="EnhancedExp__cardContent">
										<p className="EnhancedExp__cardTime">Sat, 12:35pm</p>
										<p className="EnhancedExp__cardVersus">Arsenal v Chelsea</p>
										<p className="EnhancedExp__cardType">Friendly Match</p>
									</div>
									<div className="EnhancedExp__cardLogos">
										<img className="EnhancedExp__cardLogosArsenal" src="/images/arsenal-fc.svg" alt="Arsenal logo"/>
										<img className="EnhancedExp__cardLogosChelsea" src="/images/chelsea-fc.svg" alt="Chelsea logo"/>
									</div>
								</EnhancedCard.Body>
								<EnhancedCard.Footer>
									Turn on all match notifications
									<EnhancedCard.Switch />
								</EnhancedCard.Footer>
							</EnhancedCard>
						</div>
						<div className="EnhancedExp__cardsBack">
							<EnhancedCard style={{
								backgroundImage: "url('/images/video.jpg')",
								backgroundSize: "cover"
							}}>
							</EnhancedCard>
						</div>
					</div>
				</BackImage>
			</Grid>
		</div>
	);
}

export default EnhancedExp;