import React from "react";
import { missionImage, pattern } from "../data.js";

const MissionSection = () => {
	return (
		<section
			className="mission-section section"
			data-aos="fade-left"
			data-aos-once="true"
		>
			<div className="section-img">
				<img src={missionImage} alt={missionImage} loading="lazy" />
			</div>
			<h2 className="section-header">Our mission</h2>
			<p className="section-content">
				We provide several benefits to customers, including saving time, cost,
				and the hassle of traveling to Dubai for purchases.
				<img className="section-pattern" src={pattern} alt={pattern} loading="lazy" />
			</p>
		</section>
	);
};

export default React.memo(MissionSection);
