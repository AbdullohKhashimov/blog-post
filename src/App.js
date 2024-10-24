import Header from "./reusables/Header";
import Nav from "./reusables/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./reusables/Footer";
import EditPost from "./components/EditPost";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxios";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home isLoading={isLoading} fetchError={fetchError} />
        </Route>
        <Route exact path="/post" component={NewPost} />

        <Route exact path="/edit/:id" component={EditPost} />

        <Route path="/post/:id" component={PostPage} />

        <Route path="/about" component={About} />

        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// useContext() is used instead of prop drilling enabling components to get access to data
