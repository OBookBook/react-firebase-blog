import { useState } from "react";
import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");

  const CreatePost = () => {
    console.log(title);
    console.log(postText);
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post Page</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="add title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Commet</div>
          <textarea
            placeholder="add comment"
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <button className="postButton" onClick={CreatePost}>
          send
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
