import "./styles.css";

const Post = ({ categoria, title, descricao, author, date }) => {
  return (
    <div className="post">
      <div className="img-post"></div>
      <h5 className="categoria">{categoria}</h5>
      <h3 className="title">{title}</h3>
      <p className="desc-post">{descricao}</p>
      <div className="profile">
        <div className="avatar"></div>
        <div className="desc-profile">
          <h6>{author}</h6>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
