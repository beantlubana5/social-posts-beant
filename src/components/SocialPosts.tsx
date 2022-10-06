import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Beant",
      thought: "Learning React",
    },
    {
      title: "Preet",
      thought: "Food",
    },
    {
      title: "Teghi",
      thought: "Learning ReactPaw Patrol",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deletePost = (index: number): void => {
    // keep in mind immutability
    // slice is exclusive

    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => [...prev.slice(0), post]);
  };

  return (
    <div className="SocialPosts">
      <h1>My Thought</h1>
      <button onClick={() => setShowForm(true)}>
        New Thought
        {showForm && (
          <PostForm
            onSubmitForm={addPost}
            setShowForm={() => setShowForm(false)}
          />
        )}
      </button>
      <ul>
        {posts.map((item, i) => (
          <PostInList key={i} post={item} onDelete={() => deletePost(i)} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
