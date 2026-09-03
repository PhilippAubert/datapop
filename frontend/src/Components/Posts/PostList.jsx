import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Post } from "./Post.jsx";

import dummyPost from "../../utils/dummyPost.js"

import "./PostList.css";

export const PostList = () => {

	const [posts, setPosts] = useState(dummyPost);

	const navigate = useNavigate();

	useEffect(() => {
		fetch("http:/${process.env.IP}/:3000/")
			.then((response) => response.json())
			.then((posts) => setPosts(posts))
			.catch((error) => console.log(error));
	}, []);


	const handlePostRemove = (post) => {
		console.log(` deleting post ${post.title}`);
		const newPosts = posts.filter((postItem) => {
			return postItem !== post;
		});

		const options = {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(post),
		};

		fetch(`http://localhost:3005/spark/${post._id}`, options).then(() =>
			fetch("http://localhost:3005/spark", {
				method: "GET",
				"content-type": "application/json",
			})
				.then((response) => response.json())
				.then((posts) => setPosts(posts))
				.then(() => console.log(`Post no. ${post.title} deleted`))
		);

		setPosts(newPosts);
	}

	const switchToEdit = (id) => {
		navigate(`/edit/${id}`);
	}

	return <div className="main">
		<div className="posts--list">
			{posts &&
				posts
					.map((post) => {
						return (
							<Post
								key={post._id}
								post={post}
								onRemoveClick={handlePostRemove}
								onSwitchClick={switchToEdit}
							/>
						);
					}).reverse() ||
				<p className="posts--list__fallback">NOTHING TO BE FOUND</p>
			}
		</div>
	</div>
}
