import React from "react";
import { useState } from "react";

import "./Input.css";

export const Input = () => {

	const [values, setValues] = useState({
		title: "",
		post: ""
	});

	const [didEdit, setDidEdit] = useState({
		title: false,
		post: false
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
		console.log(values);
	};

	const handleReset = (identifier) => {
		setValues((prev => ({
			...prev,
			[identifier]: ""
		})));
	};

	const handleInputBlur = (identifier) => {
		setDidEdit(prev => ({
			...prev,
			[identifier]: true
		}));
	}

	const hasTitleError = didEdit.title && values.title.trim().length === 0;
	const hasPostError = didEdit.post && values.post.trim().length === 0;

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
						onBlur={() => handleInputBlur("title")}
						onChange={(event) => handleValueChange("title", event.target.value)}
					/>
					<div className="input--button__area">
						<button
							onClick={() => handleReset("title")}
							type="button"
							className="input--button"
						>
							RESET
						</button>
						{hasTitleError && <p>no empty</p>}
					</div>
				</div>
				<div className="input--form">
					<label htmlFor="post" className="input--form__label">ENTER POST</label>
					<textarea
						className="input--form__textarea"
						id="post"
						name="post"
						value={values.post}
						placeholder="WRITE POST HERE"
						onBlur={() => handleInputBlur("post")}
						onChange={(event) => handleValueChange("post", event.target.value)}
					/>
					<div className="input--button__area">
						<button
							onClick={() => handleReset("post")}
							type="button"
							className="input--button"
						>
							RESET
						</button>
						{hasPostError && <p>no empty</p>}
					</div>
				</div>
				<button
					disabled={hasPostError || hasTitleError}
					type="submit"
					className="input--button__submit"
				>
					PUBLISH
				</button>
			</form>
		</div>
	);
};
