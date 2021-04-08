import "./Article.scss";

function Article({children, reverse, ...other}){
	return (
		<article className={`Article${reverse ? " Article--reverse" : ""}`} {...other}>
			{children}
		</article>
	);
}

function Title({children, level = "2", ...other}){
	var Tag = "h" + level;
	return (
		<Tag className={`Article__title Article__title--level-${level}`} {...other}>
			{children}
		</Tag>
	);
}
Article.Title = Title;

function Text({children, ...other}){
	return (
		<p className="Article__text" {...other}>
			{children}
		</p>
	);
}
Article.Text = Text;

function Link({children, to = "/", ...other}){
	return (
		<a href={to} className="Article__link" {...other}>
			{children}
		</a>
	);
}
Article.Link = Link;

export default Article;