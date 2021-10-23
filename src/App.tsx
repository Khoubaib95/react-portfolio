import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/index";
import Footer from "./components/footer/index";
import LanguageProvider from "./app.translation/language.provider";
import Loader from "./components/loader/loader";
import "./App.css";
const Home = React.lazy(() => import("./pages/home/index"));
const Project = React.lazy(() => import("./pages/project/index"));
const Contact = React.lazy(() => import("./pages/contact/index"));
const Blog = React.lazy(() => import("./pages/blog/index"));

function App() {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem("language") || navigator.language.split("-")[0]
  );
  return (
    <LanguageProvider language={language}>
      <div className="App">
        <Router>
          <Nav setLanguage={setLanguage} language={language} />
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            </Route>
            <Route exact path="/projects">
              <Suspense fallback={<Loader />}>
                <Project />
              </Suspense>
            </Route>
            <Route exact path="/contact">
              <Suspense fallback={<Loader />}>
                <Contact language={language} />
              </Suspense>
            </Route>
            <Route exact path="/l" component={Loader} />
            <Route exact path="/blog">
              <Suspense fallback={<Loader />}>
                <Blog />
              </Suspense>
            </Route>
            <Route exact render={() => <h4>404 Not Found</h4>} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
