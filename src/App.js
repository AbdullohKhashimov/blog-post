import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./reusables/Header";
import Nav from "./reusables/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./reusables/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostPage />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <Missing />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
