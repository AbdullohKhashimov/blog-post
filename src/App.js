import Header from "./reusables/Header";
import Nav from "./reusables/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./reusables/Footer";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog" />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />

          <Route exact path="/edit/:id" component={EditPost} />

          <Route path="/post/:id" component={PostPage} />

          <Route path="/about" component={About}></Route>

          <Route path="*" component={Missing}></Route>
        </Switch>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;

// useContext() is used instead of prop drilling enabling components to get access to data
