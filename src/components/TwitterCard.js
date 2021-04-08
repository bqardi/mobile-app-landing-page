import "./TwitterCard.scss";

function TwitterCard({avatar, name, children}){
	return (
		<article className="TwitterCard">
			<div className="TwitterCard__heading">
				<img className="TwitterCard__avatar" src={avatar} alt={name}/>
				<h1 className="TwitterCard__name">{name}</h1>
				<img className="TwitterCard__twitter" src="/images/twitter.svg" alt="Twitter" />
			</div>
			<p className="TwitterCard__comment">{children}</p>
		</article>
	);
}

export default TwitterCard;