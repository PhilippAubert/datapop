import React from "react";
import { useState } from "react";

import "./Input.css";

export const Input = () => {

	const [values, setValues] = useState({
		title: "",
		post: ""
	});

	const handleValueChange = (identifier, value) => {
		setValues(prev => ({
			...prev,
			[identifier]: value
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const fd = new FormData(event.target);
		const stateObject = Object.fromEntries(fd.entries());
		setValues(stateObject);
	};

	const handleReset = (identifier) => {
		setValues((prev => ({
			...prev,
			[identifier]: ""
		})));
	};

	return (
		<div className="main">
			<form
				className="input--form__container"
				onSubmit={handleSubmit}
			>
				<div className="input--form">
					<label htmlFor="title" className="input--form__label">ENTER TITLE</label>
					<input
						className="input--form__input"
						type="text"
						id="title"
						name="title"
						value={values.title}
						placeholder="ENTER TITLE"
						onChange={(event) => handleValueChange("title", event.target.value)}
					/>
					{/* 			{titleIsInvalid &&
						<div className="control-error"><p>Invalid Title</p></div>
					} */}
					<button
						onClick={() => handleReset("title")}
						type="button"
						className="input--button"
					>
						RESET
					</button>
				</div>
				<div className="input--form">
					<label htmlFor="post" className="input--form__label">ENTER POST</label>
					<textarea
						className="input--form__textarea"
						id="post"
						name="post"
						value={values.post}
						placeholder="WRITE POST HERE"
						onChange={(event) => handleValueChange("post", event.target.value)}
					/>
					<button
						onClick={() => handleReset("post")}
						type="button"
						className="input--button"
					>
						RESET
					</button>
					<p className="input--form__label">PUBLISH</p>
					<button type="submit" className="input--button">
						SEND POST
					</button>
				</div>
			</form>
		</div>
	);
};
