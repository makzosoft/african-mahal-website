import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialSocialCard from "./TestimonialSocialCard";

const Testimonials = ({ dataToRender }) => {
	return (
		<>
			{dataToRender.map((testimonial) => {
				// This is for screenshot testimonials (images only)
				if (testimonial.screenshot) {
					return (
						<TestimonialSocialCard
							screenshot={testimonial.screenshot}
							key={Math.random()}
						/>
					);
				}

				// This is for coded testimonials
				const { clientPhoto, clientName, clientReview } = testimonial;

				return (
					<TestimonialCard
						clientPhoto={clientPhoto}
						clientName={clientName}
						clientReview={clientReview}
						key={Math.random()}
					/>
				);
			})}
		</>
	);
};

export default React.memo(Testimonials);
