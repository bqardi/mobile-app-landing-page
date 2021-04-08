import { createContext, useContext, useState } from "react";
import "./EnhancedCard.scss";

var CardContext = createContext();

function EnhancedCard({children, ...other}){
	var [active, setActive] = useState(false);
	return (
		<CardContext.Provider value={{setActive}}>
			<article
				className={`EnhancedCard${active ? " EnhancedCard--active" : ""}`}
				{...other}
			>
				{children}
			</article>
		</CardContext.Provider>
	);
}

function Body({children}){
	return (
		<div className="EnhancedCard__body">
			{children}
		</div>
	);
}
EnhancedCard.Body = Body;

function Footer({children}){
	return (
		<footer className="EnhancedCard__footer">
			{children}
		</footer>
	);
}
EnhancedCard.Footer = Footer;

function Switch(){
	var {setActive} = useContext(CardContext);
	return (
		<div className="EnhancedCard__switch" onClick={e => setActive(prev => !prev)}>
			<div className="EnhancedCard__switchHandle"></div>
			<div className="EnhancedCard__switchBackground"></div>
		</div>
	);
}
EnhancedCard.Switch = Switch;

export default EnhancedCard;