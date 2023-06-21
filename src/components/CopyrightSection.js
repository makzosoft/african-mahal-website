import React from "react";

const CopyrightSection = () => {
	return (
		<>
			<section className="copyright-section">
				<hr className="copyright-section-divider" />
				<p className="copyright-section-content">
					African Mahal (c) {`${new Date().getFullYear()}`} || All rights
					reserved.
					<a href="https://www.makzosoft.com" target="_blank" rel="noreferrer">
						Developed by Makzosoft
					</a>
				</p>
			</section>
			<section></section>
		</>
	);
};

export default React.memo(CopyrightSection);
