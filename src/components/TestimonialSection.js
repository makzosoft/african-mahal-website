import React, { useState, useEffect, useRef } from "react";
import Testimonials from "./Testimonials";
import { testimonials } from "../data";
import { FiChevronDown } from "react-icons/fi";

const TestimonialSection = () => {
	const [dataToShow, setDataToShow] = useState([]);
	const dataPerRow = 3;
	const ref = useRef(dataPerRow);

	let arrayForHoldingData = [];

	const loopWithSlice = (start, end) => {
		const slicedData = testimonials.slice(start, end);
		arrayForHoldingData = arrayForHoldingData.concat(slicedData);
		setDataToShow(arrayForHoldingData);
	};

	useEffect(() => {
		loopWithSlice(0, dataPerRow);
	}, []);

	const handleShowMoreData = () => {
		// loopWithSlice(ref.current, ref.current + dataPerRow);
		loopWithSlice(0, ref.current + dataPerRow);
		ref.current += dataPerRow;
	};

	return (
		<section
			className="testimonial-section section"
			data-aos="fade-in"
			data-aos-once="true"
		>
			<h2 className="section-header" data-aos="fade-up" data-aos-once="true">
				What Our Customers are Saying
			</h2>
			<p className="section-content" data-aos="fade-up" data-aos-once="true">
				Read testimonials and reviews coming from our customers.
			</p>
			<section
				className="testimonial-cards"
				data-aos="zoom-in"
				data-aos-once="true"
			>
				<Testimonials dataToRender={dataToShow} />
			</section>
			{ref.current < testimonials.length && (
				<button
					className="btn-with-icon-alt btn"
					data-aos="fade-in"
					data-aos-duration="1000"
					onClick={handleShowMoreData}
				>
					<span>Read more</span>
					<FiChevronDown />
				</button>
			)}
		</section>
	);
};

export default React.memo(TestimonialSection);
