import "./Home.css";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  postsText: string;
  author: {
    username: string;
  };
}

const Home = () => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      // https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja&_gl=1*zpkj6l*_up*MQ..*_ga*NDg2MjQ1NTY4LjE3MzU2MTAzNzk.*_ga_CW55HF8NVT*MTczNTYxMDM3OS4xLjAuMTczNTYxMDM3OS4wLjAuMA..#get_a_document]
      const data = await getDocs(collection(db, "posts"));
      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Post[]
      );
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {postList.map((post) => (
        <div key={post.id} className="postContents">
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.postsText}</div>
          <div className="nameAndDeleteBtn">
            <h3>@{post.author.username}</h3>
            <button>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
