import Post from "../Posts";
import './styles.css';

const Articles = () => {
  return (
    <section className="articles">
      <h1 className="titulo">Articles</h1>
      <div className="container-post">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Articles;
