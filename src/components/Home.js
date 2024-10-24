import React from "react";
import Feed from "./Feed";

const Home = (props) => {
  const { posts } = props;
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ maringTop: "2rem" }}>No posts to display</p>
      )}
    </main>
  );
};

export default Home;
