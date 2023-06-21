import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { MdEmail } from "react-icons/md";

const Form = () => {
	const [nameError, setNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [messageError, setMessageError] = useState(null);

	const name = React.useRef(null);
	const email = React.useRef(null);
	const message = React.useRef(null);

	/* 
    Functions which will validate the input data whenever submit button is clicked.
  */
	const validateName = () => name.current.value !== "";
	const validateEmail = () =>
		email.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	const validateMessage = () => message.current.value !== "";

	const validateForm = () => {
		const isNameValid = validateName();
		const isEmailValid = validateEmail();
		const isMessageValid = validateMessage();

		const isFormValid = isNameValid && isEmailValid && isMessageValid;

		if (isFormValid === true) {
			// Clear all errors
			setNameError(null)
			setEmailError(null)
			setMessageError(null)

			// Submit form
			setTimeout(() => {
				document.forms['sendMessageForm'].submit()
			}, 1000)
		} else {
			if (isNameValid) {
				setNameError(null);
			} else {
				setNameError("Please enter your name");
			}
			
			if (isEmailValid) {
				setEmailError(null);
			} else {
				setEmailError("Enter a valid email address e.g. dan@gmail.com");
			}
			
			if (isMessageValid) {
				setMessageError(null);
			} else {
				setMessageError("Please type in a message");
			}
		}
	};

	return (
		<form
			className="form"
			data-aos="fade-up"
			data-aos-once="true"
			noValidate
			action="https://formspree.io/f/xyyarabk"
			method="POST"
			name="sendMessageForm"
			id="sendMessageForm"
			target="_blank"
			onSubmit={(e) => e.preventDefault()}
		>
			<h2 className="form-header">Contact us</h2>
			<section className="form-fields">
				<div className="form-field tooltip">
					<label className="form-field-label" htmlFor="name">
						Your name
					</label>
					<input
						className="form-field-input"
						type="text"
						name="name"
						placeholder="Enter your name here"
						ref={name}
					/>
					{nameError && <Tooltip text={nameError} />}
				</div>
				<div className="form-field tooltip">
					<label className="form-field-label" htmlFor="email">
						Your email
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
				<div className="form-field tooltip">
					<label className="form-field-label" htmlFor="message">
						Your message
					</label>
					<input
						className="form-field-input"
						type="text"
						name="message"
						placeholder="Type your message here"
						ref={message}
					/>
					{messageError && <Tooltip text={messageError} />}
				</div>
			</section>
			<button
				className="btn-primary btn-with-icon btn"
				type="submit"
				onClick={() => validateForm()}
			>
				<MdEmail />
				<span>Send us a message</span>
			</button>
		</form>
	);
};

export default React.memo(Form);
