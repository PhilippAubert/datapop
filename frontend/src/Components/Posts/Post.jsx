import React from "react";
import "./Posts.css";

export const Post = ({ post, onRemoveClick, onSwitchClick }) => {

	const handleEditClick = () => {
		onSwitchClick(post._id);
	}

	const handleDeleteClick = () => {
		onRemoveClick(post);
	}
	return (
		<div className="post--area">
			<h2 className="post--title">{post.title}</h2>
			<div className="post--text__area">
				<p className="post--text">{post.body}</p>
			</div>
			<div className="button--area">
				<button onClick={handleDeleteClick} className="button">
					Delete
				</button>
				<button onClick={handleEditClick} className="button">
					Edit
				</button>
			</div>
		</div>
	);
}


// goldener schnitt : 1.618, (1 + Wurzel 5) / 2  !!! 
