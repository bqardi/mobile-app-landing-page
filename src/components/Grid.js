import "./Grid.scss";

function Grid({children, className, end, ...other}) {
	return (
		<div
			className={`${className ? className + " " : ""}Grid${
				end ? " Grid--end" : ""
			}`}
			{...other}
		>
			{children}
		</div>
	);
}

export default Grid;
