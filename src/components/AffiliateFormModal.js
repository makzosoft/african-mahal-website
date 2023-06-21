import React, { useState } from "react";
import Tooltip from "./Tooltip";

const AffiliateFormModal = ({ open, onClose }) => {
	const [firstNameError, setFirstNameError] = useState(null);
	const [lastNameError, setLastNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);

	const firstName = React.useRef(null);
	const lastName = React.useRef(null);
	const email = React.useRef(null);

	/* 
    Functions which will validate the input data whenever submit button is clicked.
  */
	const validateFirstName = () => firstName.current.value !== "";
	const validateLastName = () => lastName.current.value !== "";
	const validateEmail = () =>
		email.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

	const validateForm = () => {
		const isFirstNameValid = validateFirstName();
		const isLastNameValid = validateLastName();
		const isEmailValid = validateEmail();

		const isFormValid = isFirstNameValid && isEmailValid && isLastNameValid;

		if (isFormValid === true) {
			// Clear all errors
			setFirstNameError(null);
			setLastNameError(null);
			setEmailError(null);

			// Submit form
			setTimeout(() => {
				document.forms["affiliateForm"].submit();
			}, 1000);
		} else {
			if (isFirstNameValid) {
				setFirstNameError(null);
			} else {
				setFirstNameError("Please enter your first name");
			}

			if (isLastNameValid) {
				setLastNameError(null);
			} else {
				setLastNameError("Please enter your last name");
			}

			if (isEmailValid) {
				setEmailError(null);
			} else {
				setEmailError("Enter a valid email address e.g. dan@gmail.com");
			}
		}
	};

	if (!open) return null;

	return (
		<section className="modal-overlay" onClick={onClose}>
			<section className="modal-box" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<span className="modal-header-title">Sign up</span>
					<div className="modal-header-btn-group">
						<button className="btn-secondary btn" onClick={onClose}>
							<span>Cancel</span>
						</button>
					</div>
				</div>
				<div className="modal-body">
					<form
						className="form"
						noValidate
						onSubmit={(e) => e.preventDefault()}
						action="https://formspree.io/f/xeqwywpg"
						method="POST"
						name="affiliateForm"
						id="affiliateForm"
						target="_blank"
					>
						<section className="form-fields">
							<div className="form-field tooltip">
								<label className="form-field-label" htmlFor="first-name">
									First name
								</label>
								<input
									className="form-field-input"
									type="text"
									name="first-name"
									placeholder="Enter your name here"
									ref={firstName}
								/>
								{firstNameError && <Tooltip text={firstNameError} />}
							</div>
							<div className="form-field tooltip">
								<label className="form-field-label" htmlFor="last-name">
									Last name
								</label>
								<input
									className="form-field-input"
									type="text"
									name="last-name"
									placeholder="Enter your name here"
									ref={lastName}
								/>
								{lastNameError && <Tooltip text={lastNameError} />}
							</div>
							<div className="form-field tooltip">
								<label className="form-field-label" htmlFor="email">
									Email Address
								</label>
								<input
									className="form-field-input"
									type="email"
									name="email"
									placeholder="Enter your email address here"
									ref={email}
								/>
								{emailError && <Tooltip text={emailError} />}
							</div>
						</section>
						<button
							className="btn-primary btn"
							type="submit"
							onClick={() => validateForm()}
						>
							<span>Sign up</span>
						</button>
					</form>
				</div>
			</section>
		</section>
	);
};

export default React.memo(AffiliateFormModal);
