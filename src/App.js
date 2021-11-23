import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Resources from "./pages/Resources/ResourcesPage";
import News from "./pages/News/NewsPage";
import Team from "./pages/Team/TeamPage";
import ContactUs from "./pages/ContactUs/ContactUsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT } from "./utils/Constant";
const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <nav>
        <Header />
      </nav>
      <main style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources" component={Resources} />
          <Route path="/news" component={News} />
          <Route path="/team" component={Team} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
