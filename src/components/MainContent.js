import React, { useState } from "react";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import MissionSection from "./MissionSection";
import VisionSection from "./VisionSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import AboutSection from "./AboutSection";
import AdvertSection from "./AdvertSection";

const MainContent = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<main className="main">
			<HeroSection />
			<StorySection />
			<MissionSection />
			<VisionSection />
			<ServiceSection />
			<TestimonialSection />
			<AboutSection />
			<AdvertSection />
		</main>
	);
};

export default MainContent;
