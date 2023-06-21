import React from "react";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";

const ContactSection = () => {
	return (
		<section
			className="contact-section"
			data-aos="fade-up"
			data-aos-once="true"
		>
			<div className="contacts">
				<div className="contacts-location">
					<TiLocation />
					<p>Ontario towers, Business Bay, Dubai, U.A.E.</p>
				</div>
				<div className="contacts-call">
					<IoCall />
					<a href="tel:+971569067492">+971 56 906 7492</a>
				</div>
				<div className="contacts-email">
					<MdEmail />
					<a href="mailto:buyingassistant@africanmahal.me" translate="no">
						buyingassistant@africanmahal.me
					</a>
				</div>
			</div>
			<div className="socials">
				<a
					href="https://www.facebook.com/africanmahal"
					target="_blank"
					rel="noreferrer"
				>
					<ImFacebook />
				</a>
				<a
					href="https://www.twitter.com/africanmahal"
					target="_blank"
					rel="noreferrer"
				>
					<BsTwitter />
				</a>
				<a
					href="https://www.instagram.com/africanmahal"
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram />
				</a>
				<a href="https://wa.me/+971569067492" target="_blank" rel="noreferrer">
					<BsWhatsapp />
				</a>
			</div>
		</section>
	);
};

export default React.memo(ContactSection);
