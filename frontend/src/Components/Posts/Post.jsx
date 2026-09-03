import React from "react";
import "./Posts.css";

export const Post = ({ post, onRemoveClick, onSwitchClick }) => {

	function handleEditClick() {
		onSwitchClick(post._id);
	}

	function handleDeleteClick() {
		onRemoveClick(post);
	}
	return (
		<div className="posts--area">
			<h2 className="posts--area__title">{post.title}</h2>
			<div className="posts--area__post">
				<p className="posts--area__text">{post.body}</p>
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
