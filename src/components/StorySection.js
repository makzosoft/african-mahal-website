import React from "react";

const StorySection = () => {
	return (
		<section
			className="story-section section"
			data-aos="fade-up"
			data-aos-once="true"
		>
			<h2 className="section-header">Our Heritage</h2>
			<p className="section-content">
				African Mahal is a Dubai-based agency company that offers buying
				assistance to customers in Africa, specializing in cars, engines and
				furniture.
			</p>
		</section>
	);
};

export default React.memo(StorySection);
