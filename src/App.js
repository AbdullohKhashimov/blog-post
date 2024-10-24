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
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const history = useHistory(); // -> pushes back to homepage after a specified request

  const handleSubmit = async () => {};

  const handleDelete = async (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    history.push("/");
  };

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/post">
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>

        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>

        <Route path="/about" component={About}></Route>

        <Route path="*" component={Missing}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
