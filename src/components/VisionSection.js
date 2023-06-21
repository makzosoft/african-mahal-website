import React from "react";
import { visionImage, pattern } from "../data.js";

const VisionSection = () => {
	return (
		<section
			className="vision-section section"
			data-aos="fade-right"
			data-aos-once="true"
		>
			<div className="section-img">
				<img src={visionImage} alt={visionImage} loading="lazy" />
			</div>
			<h2 className="section-header">Our vision</h2>
			<p className="section-content">
				Our vision is to expand our purchasing expertise to other sectors.
				<img className="section-pattern" src={pattern} alt={pattern} loading="lazy" />
			</p>
		</section>
	);
};

export default React.memo(VisionSection);
