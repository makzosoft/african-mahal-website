// Import React and React DOM
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";

// Import Styles
import "./styles/normalize.css";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/footer.css";
import "./styles/components/form.css";
import "./styles/components/button.css";
import "./styles/components/tooltip.css";
import "./styles/components/modal.css";
import "./styles/components/testimonial-card.css";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</Router>
);
