import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
}
const PostInList = ({ post }: Props) => {
  return (
    <li className="PostInList">
      <p>{post.title}</p>
      <p>{post.thought}</p>
    </li>
  );
};

export default PostInList;
