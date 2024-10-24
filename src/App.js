import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./reusables/Header";
import Nav from "./reusables/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./reusables/Footer";
import { format } from "date-fns";
import { useEffect, useState } from "react";

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
      title: "My 2nd Post",
      datetime: "June 04, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "June 20, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
    {
      id: 4,
      title: "My fourth Post",
      datetime: "June 30, 2024 11:20:35 AM",
      body: "Lorem Ipsum dolor sit amet consectetur adispicing elit.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const history = useHistory(); // -> pushes back to homepage after a specified request

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };

    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    history.push("/");
  };

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
          <Home posts={searchResults} />
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
