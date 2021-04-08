import Feature from "./Feature";
import "./Features.scss";

var features = [
	{
		icon: "M2.5,4.5H21.5C22.34,4.5 23,5.15 23,6V17.5C23,18.35 22.34,19 21.5,19H2.5C1.65,19 1,18.35 1,17.5V6C1,5.15 1.65,4.5 2.5,4.5M9.71,8.5V15L15.42,11.7L9.71,8.5M17.25,21H6.65C6.35,21 6.15,20.8 6.15,20.5C6.15,20.2 6.35,20 6.65,20H17.35C17.65,20 17.85,20.2 17.85,20.5C17.85,20.8 17.55,21 17.25,21Z",
		text: "Video highlights for every Premier League and English Football League game"
	},
	{
		icon: "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z",
		text: "Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian"
	},
	{
		icon: "M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11V15M13,9H17A1,1 0 0,1 18,10V14A1,1 0 0,1 17,15H13V9M14.5,13.5H16.5V10.5H14.5V13.5Z",
		text: "Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues"
	},
	{
		icon: "M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z",
		text: "Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action"
	},
	{
		icon: "M19,11H11V17H19V11M23,19V5C23,3.88 22.1,3 21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19M21,19H3V4.97H21V19Z",
		text: "The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action"
	},
	{
		icon: "M17,17H15V13H17M13,17H11V7H13M9,17H7V10H9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",
		text: "Live updated league tables including all the domestic, European and major leagues and tournaments"
	},
	{
		icon: "M7,1A2,2 0 0,0 5,3V7H7V4H17V20H7V17H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C7.31,15 8.42,14.17 8.83,13H11V15H13V13H14V11H8.83C8.42,9.83 7.31,9 6,9M6,11A1,1 0 0,1 7,12A1,1 0 0,1 6,13A1,1 0 0,1 5,12A1,1 0 0,1 6,11Z",
		text: "The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter"
	},
	{
		icon: "M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z",
		text: "Match reports, previews and a dedicated news section"
	},
	{
		icon: "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z",
		text: "And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team."
	},
]

// OMG I love that I discovered you "yield"...
// Not that it's the best usecase for this scenario
// but I just had to try it out:

var id = IDGenerator();

function* IDGenerator(){
	var id = 0;
	while(true){
		yield "id-" + id;
		id++;
	}
}

function Features(){
	return (
		<section className="Features">
			<h2 className="Features__title">Features That Will Tailor Your Experience</h2>
			<div className="Features__grid">
				{features.map(feature => <Feature key={id.next().value} iconPath={feature.icon}>{feature.text}</Feature>)}
			</div>
		</section>
	);
}

export default Features;