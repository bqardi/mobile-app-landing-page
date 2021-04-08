import Article from "./Article";
import "./Interface.scss";
import Grid from "./Grid";
// import BackImage from "./BackImage";

function Interface(){
	return (
		<div className="Interface">
			<Grid className="Interface__grid">
				<Article>
					<Article.Title level="3">Get started</Article.Title>
					<Article.Title>User-friendly Interface</Article.Title>
					<Article.Text>
						The in-game goal clips from every Premier League match are available to Guardian TV customers with a Guardian subscription.
					</Article.Text>
					<Article.Text>
						So, if you’re not a subscriber, now’s the time to make that savvy call. If that’s a step too far for you, you can still watch loads of firecracker Premier League action as long as you sign in with a free Guardian iD.
					</Article.Text>
					<Article.Link to="/interface">Learn more</Article.Link>
				</Article>
				{/* <BackImage
					src="/images/phone.png"
					alt="User friendly Interface"
				>
					<div className="Interface__icons">
						<div className="Interface__icon">
							<div className="Interface__count">7</div>
							<svg viewBox="0 0 24 24"><path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"></path></svg>
						</div>
						<div className="Interface__icon Interface__icon--bottom">
							<svg viewBox="0 0 24 24"><path d="M7,1A2,2 0 0,0 5,3V7H7V4H17V20H7V17H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C7.31,15 8.42,14.17 8.83,13H11V15H13V13H14V11H8.83C8.42,9.83 7.31,9 6,9M6,11A1,1 0 0,1 7,12A1,1 0 0,1 6,13A1,1 0 0,1 5,12A1,1 0 0,1 6,11Z"></path></svg>
						</div>
						<div className="Interface__dot">
							<div className="Interface__dotInner"></div>
						</div>
					</div>
				</BackImage> */}
			</Grid>
		</div>
	);
}

export default Interface;