import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>
      </div>
      <div className="postTextContainer">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        voluptas in neque consectetur, error aut nostrum modi tenetur iusto
        pariatur iure, nihil labore dolores ipsa sequi illum! Corporis, placeat
        consequatur! Minima natus eligendi, consequuntur eius alias ab, a enim
        quidem, nisi quos facilis in pariatur dicta dolorum quod odit odio
        consequatur perspiciatis! Praesentium assumenda dolor illo architecto ab
        provident commodi. Est nesciunt, necessitatibus sunt sed eligendi soluta
        incidunt, aliquam quaerat ad facilis explicabo hic adipisci at
        temporibus, repellat ipsam quod possimus. Minima enim dolore odit a
        consectetur eum nobis expedita!
      </div>
      <div className="nameAndDeleteBtn">
        <h3>@Name</h3>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Home;
