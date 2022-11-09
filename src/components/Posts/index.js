import "./styles.css";

const Post = () => {
  return (
    <div className="post">
      <div className="img-post"></div>
      <h5 className="categoria">Tecnologia</h5>
      <h3 className="title">O guia definitivo sobre o blog</h3>
      <p className="desc-post">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        maxime doloremque quia, sit ab iusto, eos laboriosam voluptas cum
        tempora temporibus, magni autem nesciunt necessitatibus. Error eveniet
        doloribus nesciunt qui!
      </p>
      <div className="profile">
        <div className="avatar"></div>
        <div className="desc-profile">
          <h6>Fulano de Tal</h6>
          <p>Aug 2, 2020 - 8 min react</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
