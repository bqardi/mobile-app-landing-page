import Article from "./Article";
import "./TeamSupport.scss";
import Grid from "./Grid";
import BackImage from "./BackImage";

function TeamSupport(){
	return (
		<div className="TeamSupport">
			<Grid>
				<Article reverse>
					<div className="TeamSupport__content">
						<Article.Title>Get Up Close With Your Team</Article.Title>
						<Article.Text>
							If you’re interested in the scores of more than one team (it’s OK, we won’t tell your mates you support two clubs!), you can choose the scores and competitions that matter to you using the ‘My Scores’ section. So, make sure you’re a top-flight football fan by downloading the Football Score Centre now. It’s got all this:
						</Article.Text>
						<div className="TeamSupport__links">
							<Article.Link to="/download-on-app-store">
								<img src="/images/apple-store.svg" alt="Download on App Store"/>
							</Article.Link>
							<Article.Link to="/download-on-google-play">
								<img src="/images/google-play.svg" alt="Download on Google Play"/>
							</Article.Link>
						</div>
					</div>
				</Article>
				<BackImage
					src="/images/team-support.png"
					alt="Team support"
					className="TeamSupport__backimage"
				/>
			</Grid>
		</div>
	);
}

export default TeamSupport;