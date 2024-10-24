import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = (props) => {
  const { posts, handleDelete } = props;
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}

        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>
              <Link to="/">Visit Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
