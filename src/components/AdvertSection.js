import React, { useState } from "react";
import AffiliateFormModal from "./AffiliateFormModal";

const AdvertSection = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<section
				className="advert-section section"
				data-aos="fade-in"
				data-aos-once="true"
			>
				<p
					className="section-content"
					data-aos="fade-down"
					data-aos-once="true"
				>
					Are you between the ages 25 - 35? If yes, then you can become an
					affiliate.
				</p>
				<button
					className="btn btn-secondary"
					data-aos="fade-up"
					data-aos-once="true"
					onClick={() => setOpenModal(true)}
				>
					Become an Affiliate
				</button>
			</section>
			<AffiliateFormModal
				open={openModal}
				onClose={() => setOpenModal(false)}
			/>
		</>
	);
};

export default React.memo(AdvertSection);
