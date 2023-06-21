import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
	serviceCardImage1,
	serviceCardImage2,
	serviceCardImage3,
} from "../data.js";

const ServiceSection = () => {
	return (
		<section
			className="service-section section"
			data-aos="fade-in"
			data-aos-once="true"
			id="services"
		>
			<h2 className="section-header" data-aos="fade-up" data-aos-once="true">
				Our services
			</h2>
			<p className="section-content" data-aos="fade-up" data-aos-once="true">
				We offer buying assistance to customers in Africa specializing in:
			</p>
			<section
				className="service-cards"
				data-aos="zoom-in"
				data-aos-once="true"
			>
				<div className="service-card">
					<img
						className="service-card-img"
						src={serviceCardImage1}
						alt={serviceCardImage1}
						loading="lazy"
					/>
					<p className="service-card-header">Engines</p>
					<p className="service-card-tagline">Get your desired engine</p>
				</div>
				<div className="service-card">
					<img
						className="service-card-img"
						src={serviceCardImage2}
						alt={serviceCardImage2}
						loading="lazy"
					/>
					<p className="service-card-header">Cars</p>
					<p className="service-card-tagline">Enjoy easy shipment of cars</p>
				</div>
				<div className="service-card">
					<img
						className="service-card-img"
						src={serviceCardImage3}
						alt={serviceCardImage3}
						loading="lazy"
					/>
					<p className="service-card-header">Furniture</p>
					<p className="service-card-tagline">
						Get a reliable supply chain for your furniture
					</p>
				</div>
			</section>
			<button
				className="btn-primary btn-with-icon btn"
				data-aos="fade-up"
				data-aos-once="true"
			>
				<BsWhatsapp />
				<a href="https://wa.me/+971569067492" target="_blank" rel="noreferrer">
					Send us a message
				</a>
			</button>
		</section>
	);
};

export default React.memo(ServiceSection);
