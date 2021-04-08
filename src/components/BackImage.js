import "./BackImage.scss";

function BackImage({children, className, fade, src, alt}) {
	return (
		<div
			className={`${className ? className + " " : ""}BackImage${
				fade ? " BackImage--fade" : ""
			}`}
		>
			{src ? (
				<img className="BackImage__image" src={src} alt={alt} />
			) : undefined}
			{children ? (
				<div className="BackImage__content">{children}</div>
			) : undefined}
		</div>
	);
}

export default BackImage;
