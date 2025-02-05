import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import Feed from "./Feed";

const Home = () => {
  const { searchResults, isLoading, fetchError } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No Posts to display</p>
        ))}
    </main>
  );
};

export default Home;
