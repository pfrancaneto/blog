import api from "../../services/api";
import Post from "../../components/Posts";
import { useEffect, useState } from "react";
import "./styles.css";

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <>
      <h2>Articles</h2>
      <div className="container">
        {post.map((post) => (
          <Post
            key={post.id}
            categoria={post.category}
            title={post.title}
            author={post.author}
            date={post.date}
            descricao={post.description}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
