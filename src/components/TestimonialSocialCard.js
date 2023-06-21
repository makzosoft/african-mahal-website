import React from "react";

const TestimonialSocialCard = ({ screenshot }) => {
	return (
		<div className="testimonial-card--social testimonial-card" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
			<img className="screenshot" src={screenshot} alt={screenshot} loading="lazy" />
		</div>
	);
};

export default React.memo(TestimonialSocialCard);
