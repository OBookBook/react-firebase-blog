import "./CreatePost.css";
import { useState } from "react";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");

  const CreatePost = async () => {
    if (!auth.currentUser) {
      alert("You must be logged in to create a post");
      return;
    }

    // @URL https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja&_gl=1*1b5wgtw*_up*MQ..*_ga*NDg2MjQ1NTY4LjE3MzU2MTAzNzk.*_ga_CW55HF8NVT*MTczNTYxMDM3OS4xLjAuMTczNTYxMDM3OS4wLjAuMA..#add_a_document
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/");
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
