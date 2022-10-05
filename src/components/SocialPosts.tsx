import { useState } from "react";
import Post from "../models/Post";
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
  return (
    <div className="SocialPosts">
      <h1>My Thought</h1>
      <button>New Thought</button>
      <ul>
        {posts.map((item, i) => (
          <PostInList key={i} post={item} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
