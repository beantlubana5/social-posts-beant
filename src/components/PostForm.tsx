import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onSubmitForm: (post: Post) => void;
  setShowForm: () => void;
}

const PostForm = ({ onSubmitForm, setShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmitForm({ title, thought });
    setShowForm();
  };

  return (
    <form className="PostForm" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <input
        type="test"
        name="thought"
        id="thought"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button>Enter</button>
    </form>
  );
};

export default PostForm;
