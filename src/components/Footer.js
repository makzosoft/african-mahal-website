import Form from "./Form";
import ContactSection from "./ContactSection";
import CopyrightSection from "./CopyrightSection";

const Footer = () => {
	return (
		<footer className="footer" data-aos="fade-in" data-aos-once="true">
			<Form />
			<ContactSection />
			<CopyrightSection />
		</footer>
	);
};

export default Footer;
