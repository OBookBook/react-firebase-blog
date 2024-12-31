import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post Page</h1>
        <div className="inputPost">
          <div>Title</div>
          <input type="text" placeholder="add title" />
        </div>
        <div className="inputPost">
          <div>Commet</div>
          <textarea placeholder="add comment" />
        </div>
        <button className="postButton">send</button>
      </div>
    </div>
  );
};

export default CreatePost;
