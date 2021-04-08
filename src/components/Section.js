import "./Section.scss";

function Section({children, background = "white", ...other}){

	return (
		<section className={`Section Section--${background}`} {...other}>
			{children}
		</section>
	);
}

export default Section;