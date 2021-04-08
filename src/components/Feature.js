import "./Feature.scss";

function Feature({children, iconPath}) {
	return (
		<article className="Feature">
			<svg viewBox="0 0 24 24">
				<path d={iconPath}></path>
			</svg>
			{children}
		</article>
	);
}

export default Feature;
