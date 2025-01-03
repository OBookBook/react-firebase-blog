import "./CreatePost.css";
import { db, auth } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

interface CreatePostProps {
  isAuth: boolean;
}

const CreatePost = ({ isAuth }: CreatePostProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");

  const CreatePost = async () => {
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

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

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
