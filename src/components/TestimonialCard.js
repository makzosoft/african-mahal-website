import React from "react";
import { blockquoteIcon } from "../data";

const TestimonialCard = ({ clientPhoto, clientName, clientReview }) => {
	return (
		<div className="testimonial-card" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
			<div className="client-review">
				<img src={blockquoteIcon} alt={blockquoteIcon} />
				<p>{clientReview}</p>
			</div>
			<div className="client-info">
				<img className="client-photo" src={clientPhoto} alt={clientPhoto} loading="lazy" />
				<p className="client-name">{clientName}</p>
			</div>
		</div>
	);
};

export default React.memo(TestimonialCard);
