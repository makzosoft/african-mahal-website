import React from "react";

const Tooltip = ({ text }) => {
	return (
		<span className="tooltip-text">{ text }</span>
	);
};

export default React.memo(Tooltip);
