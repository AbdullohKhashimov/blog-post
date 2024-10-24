import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./reusables/Header";
import Nav from "./reusables/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./reusables/Footer";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first Post",
      datetime: "June 02, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
    {
      id: 2,
      title: "My first Post",
      datetime: "June 04, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
    {
      id: 3,
      title: "My first Post",
      datetime: "June 20, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
    {
      id: 4,
      title: "My first Post",
      datetime: "June 30, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostPage />
        </Route>

        <Route path="/about" component={About}></Route>

        <Route path="*" component={Missing}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
